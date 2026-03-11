async function load() {
  const res = await fetch('./data/snapshot.json');
  const data = await res.json();

  document.getElementById('meta').textContent = `Point-in-time snapshot: ${data.meta.snapshotAt}`;
  document.getElementById('value').textContent = `$${data.kpis.portfolioValue.toFixed(2)}`;
  document.getElementById('ret').textContent = `${(data.kpis.cumulativeReturnPct * 100).toFixed(2)}%`;
  document.getElementById('spy').textContent = `${(data.kpis.relativeVsSpyPct * 100).toFixed(2)}%`;

  const tbl = document.getElementById('holdingsTable');
  tbl.innerHTML = `<tr><th>Ticker</th><th>Qty</th><th>Entry</th><th>Last</th><th>P/L %</th><th>State</th></tr>` +
    data.holdings.map(h => `<tr>
      <td>${h.ticker}</td>
      <td>${h.qty}</td>
      <td>${h.entry}</td>
      <td>${h.last}</td>
      <td>${(h.pnlPct*100).toFixed(2)}%</td>
      <td><span class="pill ${h.state==='ACTIVE_POSITION'?'ok':'warn'}">${h.state}</span></td>
    </tr>`).join('');

  const actions = document.getElementById('actions');
  actions.innerHTML = data.actions.map(a => `<div style="margin-bottom:10px; padding:8px; border:1px solid #2a3264; border-radius:10px;">
      <div><b>${a.status}</b> · ${a.ticker} · ${a.side} ${a.qty}</div>
      <div class="muted">Entry ${a.entry} · Stop ${a.stop} · Target ${a.target}</div>
    </div>`).join('');

  const events = document.getElementById('events');
  events.innerHTML = (data.publicEvents || []).map(e => `<div style="margin-bottom:10px; padding:8px; border:1px solid #2a3264; border-radius:10px;">
      <div><b>${e.type}</b> · <span class="muted">${e.at}</span></div>
      <div class="muted">${e.summary}</div>
      <div class="muted">Impact: ${e.impact}</div>
    </div>`).join('') || '<div class="muted">No public events in this snapshot.</div>';

  new Chart(document.getElementById('equityChart'), {
    type: 'line',
    data: {
      labels: data.equityCurve.map(p => p.at),
      datasets: [
        { label: 'Portfolio', data: data.equityCurve.map(p => p.portfolio), borderColor: '#77a6ff', tension: 0.2 },
        { label: 'SPY', data: data.equityCurve.map(p => p.spy), borderColor: '#8ef1b1', tension: 0.2 },
        { label: 'HYSA hurdle', data: data.equityCurve.map(p => p.hysa), borderColor: '#f5d27f', tension: 0.2 }
      ]
    },
    options: { responsive: true, plugins: { legend: { labels: { color: '#c9d2ff' } } }, scales: { x: { ticks: { color: '#9eabeb' } }, y: { ticks: { color: '#9eabeb' } } } }
  });
}

load();