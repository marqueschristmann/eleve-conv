import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { Activity, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const dataExecution = [
  { name: 'Jan', executado: 4000, pendente: 2400 },
  { name: 'Fev', executado: 3000, pendente: 1398 },
  { name: 'Mar', executado: 2000, pendente: 9800 },
  { name: 'Abr', executado: 2780, pendente: 3908 },
  { name: 'Mai', executado: 1890, pendente: 4800 },
  { name: 'Jun', executado: 2390, pendente: 3800 },
  { name: 'Jul', executado: 3490, pendente: 4300 },
];

const dataSector = [
  { name: 'Saúde', value: 450000 },
  { name: 'Educação', value: 300000 },
  { name: 'Infraestrutura', value: 350000 },
  { name: 'Cultura', value: 100000 },
];

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#6366f1'];

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
      <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

export const DashboardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-slate-50 p-6 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Mock Window Header */}
        <div className="flex items-center space-x-2 mb-6 border-b border-slate-200 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 text-xs text-slate-400 font-mono">dashboard_eleveconv_v2.0.exe</div>
        </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={CheckCircle} label="Emendas Aprovadas" value="142" color="text-emerald-600 bg-emerald-600" />
        <StatCard icon={Activity} label="Execução Total" value="R$ 12.4M" color="text-brand-600 bg-brand-600" />
        <StatCard icon={Clock} label="Em Análise" value="18" color="text-amber-500 bg-amber-500" />
        <StatCard icon={AlertCircle} label="Pendências" value="3" color="text-red-500 bg-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Execution Timeline */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Cronograma de Execução Financeira</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataExecution}>
                <defs>
                  <linearGradient id="colorExec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="executado" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorExec)" name="Valor Executado" />
                <Area type="monotone" dataKey="pendente" stroke="#cbd5e1" fill="transparent" strokeDasharray="5 5" name="Valor Pendente" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Sector Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Destinação por Setor</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataSector}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataSector.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Transparency Banner within Dashboard */}
      <div className="mt-6 bg-slate-900 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
              <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Portal da Transparência: Ativo e Atualizado</span>
          </div>
          <span className="text-slate-400 text-xs">Última sincronização: Há 2 min</span>
      </div>
    </div>
  );
};