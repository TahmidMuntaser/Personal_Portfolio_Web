"use client";

import React, { useEffect, useRef } from "react";

export default function HeroGraphCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastTime = 0;
    const lastInitSize = { w: 0, h: 0 };
    const pointer = { x: -9999, y: -9999, active: false };
    let graph = { vertices: [], edges: [], waves: [], packets: [], lastHoverId: -1 };

    const initGraph = () => {
      const isMobile = width < 640;
      const targetCell = isMobile ? 120 : 115;
      const padX = isMobile ? 28 : Math.max(48, width * 0.08);
      const padY = isMobile ? 32 : Math.max(48, height * 0.12);
      const cols = Math.min(14, Math.max(4, Math.round((width - padX * 2) / targetCell) + 1));
      const rows = Math.min(isMobile ? 6 : 8, Math.max(isMobile ? 4 : 5, Math.round((height - padY * 2) / targetCell) + 1));
      const targetCount = cols * rows;
      const usableW = Math.max(40, width - padX * 2);
      const usableH = Math.max(40, height - padY * 2);
      const minDist = targetCell * 0.5;
      lastInitSize.w = width;
      lastInitSize.h = height;
      const vertices = [];
      const edges = [];

      for (let i = 0; i < targetCount; i++) {
        let bestX = padX + Math.random() * usableW;
        let bestY = padY + Math.random() * usableH;
        let bestNearest = -1;

        for (let attempt = 0; attempt < 24; attempt++) {
          const cx = padX + Math.random() * usableW;
          const cy = padY + Math.random() * usableH;
          let nearestDist = Infinity;
          for (const v of vertices) {
            const d = Math.hypot(v.x - cx, v.y - cy);
            if (d < nearestDist) nearestDist = d;
          }
          if (nearestDist >= minDist) {
            bestX = cx;
            bestY = cy;
            break;
          }
          if (nearestDist > bestNearest) {
            bestNearest = nearestDist;
            bestX = cx;
            bestY = cy;
          }
        }

        vertices.push({
          id: i,
          label: `0x${i.toString(16).padStart(2, "0")}`,
          ox: bestX,
          oy: bestY,
          x: bestX,
          y: bestY,
          vx: 0,
          vy: 0,
          phase: Math.random() * Math.PI * 2,
          adj: [],
          heat: 0,
          targetHeat: 0,
          hopDist: -1,
        });
      }

      const linked = new Set();
      const maxEdgeDist = targetCell * 1.85;
      for (let i = 0; i < vertices.length; i++) {
        const neighbors = [];
        for (let j = 0; j < vertices.length; j++) {
          if (i === j) continue;
          neighbors.push({ j, d: Math.hypot(vertices[i].x - vertices[j].x, vertices[i].y - vertices[j].y) });
        }
        neighbors.sort((a, b) => a.d - b.d);

        const maxLinks = isMobile ? 2 : 3;
        let added = 0;
        for (const { j, d } of neighbors) {
          if (added >= maxLinks || (d > maxEdgeDist && vertices[i].adj.length > 0)) break;
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          added += 1;
          if (linked.has(key)) continue;
          linked.add(key);
          const edgeIdx = edges.length;
          edges.push({ a: i, b: j, heat: 0, targetHeat: 0 });
          vertices[i].adj.push({ to: j, edge: edgeIdx });
          vertices[j].adj.push({ to: i, edge: edgeIdx });
        }
      }

      graph = { vertices, edges, waves: [], packets: [], lastHoverId: -1 };
    };

    const triggerBfsWave = (startX, startY, opts = {}) => {
      const { maxDepth = Infinity, intensity = 1, stepMs = 85 } = opts;
      const { vertices } = graph;
      if (!vertices.length) return;
      let startId = 0;
      let bestDist = Infinity;
      for (const v of vertices) {
        const d = Math.hypot(v.x - startX, v.y - startY);
        if (d < bestDist) {
          bestDist = d;
          startId = v.id;
        }
      }

      const dists = Array(vertices.length).fill(-1);
      const parents = Array(vertices.length).fill(-1);
      const parentEdges = Array(vertices.length).fill(-1);
      const queue = [startId];
      dists[startId] = 0;
      let head = 0;
      while (head < queue.length) {
        const cur = queue[head++];
        if (dists[cur] >= maxDepth) continue;
        for (const { to, edge } of vertices[cur].adj) {
          if (dists[to] === -1) {
            dists[to] = dists[cur] + 1;
            parents[to] = cur;
            parentEdges[to] = edge;
            queue.push(to);
          }
        }
      }

      graph.waves.push({
        start: performance.now(),
        stepMs,
        intensity,
        dists,
        parents,
        parentEdges,
        triggered: new Set(),
      });
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (
        lastInitSize.w === 0 ||
        Math.abs(width - lastInitSize.w) > 20 ||
        Math.abs(height - lastInitSize.h) > 48
      ) {
        initGraph();
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const onMove = (e) => {
      const rect = host.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        pointer.active = false;
        return;
      }
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };

    const onClick = (e) => {
      if (reducedMotion || e.target.closest("a, button")) return;
      const rect = host.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const pushRadius = width < 640 ? 150 : 240;

      for (const v of graph.vertices) {
        const dx = v.x - cx;
        const dy = v.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < pushRadius) {
          const push = (1 - dist / pushRadius) * 6.5;
          v.vx += (dx / dist) * push;
          v.vy += (dy / dist) * push;
        }
      }
      triggerBfsWave(cx, cy, { maxDepth: Infinity, intensity: 1, stepMs: width < 640 ? 95 : 85 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    const render = (time) => {
      const dt = lastTime ? Math.min(0.05, (time - lastTime) / 1000) : 1 / 60;
      lastTime = time;
      const { vertices, edges, waves, packets } = graph;
      const isSmall = width < 640;
      const tetherRadius = isSmall ? 130 : 185;
      const pullRadius = isSmall ? 115 : 160;
      const frameScale = dt * 60;
      const riseFactor = 1 - Math.exp(-11 * dt);
      const decayFactor = Math.exp(-2.3 * dt);

      ctx.clearRect(0, 0, width, height);

      for (const v of vertices) {
        if (!reducedMotion) {
          const targetX = v.ox + Math.cos(time * 0.00075 + v.phase) * 3.5;
          const targetY = v.oy + Math.sin(time * 0.00095 + v.phase) * 3.5;

          if (pointer.active) {
            const mdx = pointer.x - v.x;
            const mdy = pointer.y - v.y;
            const mDist = Math.hypot(mdx, mdy);
            if (mDist > 12 && mDist < pullRadius) {
              const pull = (1 - mDist / pullRadius) * 0.34 * frameScale;
              v.vx += (mdx / mDist) * pull;
              v.vy += (mdy / mDist) * pull;
            }
          }

          const spring = 0.05 * frameScale;
          const damp = Math.pow(0.87, frameScale);
          v.vx = (v.vx + (targetX - v.x) * spring) * damp;
          v.vy = (v.vy + (targetY - v.y) * spring) * damp;
          v.x += v.vx * frameScale;
          v.y += v.vy * frameScale;
        }
      }

      const nearby = [];
      if (pointer.active) {
        for (const v of vertices) {
          const d = Math.hypot(v.x - pointer.x, v.y - pointer.y);
          if (d < tetherRadius) nearby.push({ v, d });
        }
        nearby.sort((a, b) => a.d - b.d);
      }
      const nearest = nearby.length ? nearby[0].v.id : -1;

      if (!reducedMotion && nearest !== -1 && nearest !== graph.lastHoverId) {
        graph.lastHoverId = nearest;
        triggerBfsWave(vertices[nearest].x, vertices[nearest].y, {
          maxDepth: 2,
          intensity: 0.65,
          stepMs: 95,
        });
      } else if (nearest === -1) {
        graph.lastHoverId = -1;
      }

      for (let w = waves.length - 1; w >= 0; w--) {
        const wave = waves[w];
        const hop = (time - wave.start) / wave.stepMs;
        let maxHop = 0;
        for (let i = 0; i < wave.dists.length; i++) {
          const d = wave.dists[i];
          if (d > maxHop) maxHop = d;
          if (d >= 0 && d <= hop && !wave.triggered.has(i)) {
            wave.triggered.add(i);
            vertices[i].targetHeat = Math.max(vertices[i].targetHeat, wave.intensity);
            vertices[i].hopDist = d;
            const eIdx = wave.parentEdges[i];
            if (eIdx >= 0) {
              edges[eIdx].targetHeat = Math.max(edges[eIdx].targetHeat, wave.intensity);
              if (!reducedMotion && wave.parents[i] >= 0) {
                packets.push({
                  from: wave.parents[i],
                  to: i,
                  progress: 0,
                  speed: 0.048,
                  intensity: wave.intensity,
                });
              }
            }
          }
        }
        if (hop > maxHop + 2) waves.splice(w, 1);
      }

      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const a = vertices[e.a];
        const b = vertices[e.b];
        const hovered = nearest === e.a || nearest === e.b;
        const target = Math.max(e.targetHeat, hovered ? 0.45 : 0);
        if (!reducedMotion) {
          e.heat += (target - e.heat) * riseFactor;
          e.targetHeat *= decayFactor;
        } else {
          e.heat = target;
        }

        ctx.strokeStyle =
          e.heat > 0.04
            ? `rgba(52, 211, 153, ${0.07 + e.heat * 0.2})`
            : "rgba(148, 163, 184, 0.07)";
        ctx.lineWidth = e.heat > 0.04 ? 1.2 : 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      if (pointer.active && nearby.length) {
        const tethers = nearby.slice(0, 3);
        ctx.save();
        ctx.setLineDash([4, 5]);
        for (const item of tethers) {
          const alpha = (1 - item.d / tetherRadius) * 0.24;
          ctx.strokeStyle = `rgba(110, 231, 183, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(item.v.x, item.v.y);
          ctx.stroke();
        }
        ctx.restore();
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed * frameScale;
        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const u = vertices[p.from];
        const v = vertices[p.to];
        const ease = p.progress * p.progress * (3 - 2 * p.progress);
        const tailEase = Math.max(0, ease - 0.18);
        const px = u.x + (v.x - u.x) * ease;
        const py = u.y + (v.y - u.y) * ease;
        const tx = u.x + (v.x - u.x) * tailEase;
        const ty = u.y + (v.y - u.y) * tailEase;
        const fade = Math.sin(p.progress * Math.PI);

        const grad = ctx.createLinearGradient(tx, ty, px, py);
        grad.addColorStop(0, "rgba(52, 211, 153, 0)");
        grad.addColorStop(1, `rgba(110, 231, 183, ${0.42 * p.intensity * fade})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.fillStyle = `rgba(167, 243, 208, ${0.48 * p.intensity * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.9, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.font = `${isSmall ? 9 : 10}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      for (const v of vertices) {
        const isNearest = v.id === nearest;
        const isNeighbor = nearest >= 0 && vertices[nearest].adj.some((x) => x.to === v.id);
        const target = Math.max(v.targetHeat, isNearest ? 0.85 : isNeighbor ? 0.42 : 0);
        if (!reducedMotion) {
          v.heat += (target - v.heat) * riseFactor;
          v.targetHeat *= decayFactor;
        } else {
          v.heat = target;
        }

        ctx.fillStyle =
          v.heat > 0.04
            ? `rgba(110, 231, 183, ${0.16 + v.heat * 0.28})`
            : "rgba(45, 212, 191, 0.16)";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.7 + v.heat * 1.5, 0, Math.PI * 2);
        ctx.fill();

        const maxLabelHop = isSmall ? 1 : 2;
        if (
          v.heat > 0.24 &&
          (isNearest || (!isSmall && isNeighbor) || (v.hopDist >= 0 && v.hopDist <= maxLabelHop))
        ) {
          ctx.fillStyle = `rgba(167, 243, 208, ${Math.min(0.28, v.heat * 0.32)})`;
          const hopTag = v.targetHeat > 0.18 && v.hopDist >= 0 ? ` d=${v.hopDist}` : "";
          ctx.fillText(`${v.label}${hopTag}`, v.x + 7, v.y - 5);
        }
      }

      if (pointer.active) {
        ctx.fillStyle = "rgba(110, 231, 183, 0.38)";
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}
