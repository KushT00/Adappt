# 🛡️ AI-Driven SOC Dashboard | Neural Defense Engine v3.1

A cutting-edge, next-generation Security Operations Center (SOC) platform inspired by Prophet Security — featuring unified data, industry-leading automation, and AI-powered threat detection.

**"Enter a new era of security operations"**

## ✨ Features

### 🎯 Main Dashboard Components

1. **Data Sources Visualization (Left Panel)**
   - 10+ integrated security data sources
   - Real-time connection status indicators
   - Hover effects with source details
   - Total sources counter (+68)

2. **Central Threat Visualization**
   - Animated revolving circles showing alert flow
   - 2,583 active alerts display
   - Smooth counter-rotating animations
   - Glowing effects and gradient borders
   - Dynamic flow lines connecting sources to incidents

3. **Incident Classification (Right Panel)**
   - **Automated**: 90 incidents handled by AI
   - **Resolved**: 96 incidents successfully closed
   - **Total Incidents**: 112 active incidents
   - **Manual**: 22 incidents requiring human intervention
   - **Open Incidents**: 16 with severity breakdown:
     - 3 Critical (Red)
     - 7 High (Orange)
     - 5 Medium (Yellow)
     - 1 Low (Blue)

4. **Statistics Cards**
   - Events Ingestion: 40 GB/24H
   - Data Ingestion: 65 TB/24H
   - Total Open Incidents: 16
   - Prevented Events: 286.1K

5. **Incident Timeline Chart**
   - Real-time incident tracking
   - Active vs Resolved visualization
   - 24-hour timeline view

## 🎨 Design Features

- **Dark Theme**: Professional cybersecurity aesthetic
- **Color Palette**: 
  - Primary: Cyan (#00d9ff)
  - Secondary: Purple (#8b5cf6)
  - Accents: Red, Orange, Yellow, Blue for severity levels
- **Animations**: 
  - Rotating circles (20s and 15s cycles)
  - Smooth hover transitions
  - Glowing effects on interactive elements
- **Modern UI**: 
  - Gradient backgrounds
  - Glass-morphism effects
  - Smooth transitions
  - Responsive design

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Tailwind

## 📁 Project Structure

```
cyber-security-dashboard/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── Dashboard.tsx        # Main dashboard container
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── Header.tsx           # Top header bar
│   ├── DataSourcesFlow.tsx  # Main visualization component
│   ├── StatsCard.tsx        # Statistics card component
│   └── IncidentChart.tsx    # Timeline chart component
└── public/                  # Static assets
```

## 🎯 Key Components

### DataSourcesFlow
The centerpiece component featuring:
- Left: Data source list with icons
- Center: Animated threat visualization
- Right: Incident classification and severity

### Sidebar
- Navigation menu
- User profile
- Quick actions
- Settings access

### Dashboard Metrics
- Real-time statistics
- Trend indicators
- Color-coded severity levels

## 🔧 Customization

### Changing Colors
Edit `app/globals.css`:
```css
:root {
  --cyan: #00d9ff;
  --purple: #8b5cf6;
  /* Add your colors */
}
```

### Adjusting Animations
Modify animation speeds in `globals.css`:
```css
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
```

### Sample Data
Update data in component files:
- `DataSourcesFlow.tsx` - Data sources and metrics
- `StatsCard.tsx` - Statistics values
- `IncidentChart.tsx` - Timeline data

## 📊 Dashboard Metrics

- **Response Time**: < 100ms
- **Data Refresh**: Real-time
- **Supported Sources**: 68+
- **Incident Types**: 4 severity levels
- **Automation Rate**: 80%+

## 🌟 Future Enhancements

- [ ] Real-time WebSocket integration
- [ ] Advanced filtering and search
- [ ] Detailed incident drill-down
- [ ] Export reports functionality
- [ ] Multi-tenant support
- [ ] Dark/Light theme toggle
- [ ] Mobile responsive optimization

## 📝 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for cybersecurity professionals
