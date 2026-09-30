export interface QuantProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  category:
    | "Stochastic Modeling"
    | "Financial Derivatives Pricing"
    | "Deep Learning for Finance";
  topics: string[];
  htmlPath: string;
}

export const quantCategories = [
  {
    id: "deep-learning",
    name: "Deep Learning for Finance",
    description:
      "Neural forecasting, representation learning, walk-forward validation, and allocation backtests.",
    icon: "🧠",
  },
  {
    id: "stochastic-modeling",
    name: "Stochastic Modeling",
    description:
      "Option pricing, Heston calibration, Monte Carlo simulation, and regime-based allocation research.",
    icon: "📈",
  },
  {
    id: "derivatives-pricing",
    name: "Financial Derivatives Pricing",
    description:
      "Binomial trees, put-call parity, stochastic volatility, jump diffusion, and American options.",
    icon: "💹",
  },
] as const;

export const quantProjects: QuantProject[] = [
  {
    id: "dl-gwp1",
    slug: "dl-gwp1",
    title: "Multi-Asset ETF Forecasting with Deep Learning",
    description:
      "Compare MLP, CNN–GAF, and LSTM models for 25-day ETF return forecasts across SPY, TLT, SHY, GLD, and DBO, then backtest a multi-output allocation strategy.",
    category: "Deep Learning for Finance",
    topics: ["MLP", "CNN-GAF", "LSTM", "ETF Allocation"],
    htmlPath: "/notebooks/deep-learning/dl-gwp1/dl-gwp1.html",
  },
  {
    id: "dl-gwp2",
    slug: "dl-gwp2",
    title: "Validation Design for Deep Learning Trading Strategies",
    description:
      "Study how chronological splits, walk-forward validation, and label purging change apparent performance for MLP, LSTM, and CNN-GAF models on Bitcoin returns.",
    category: "Deep Learning for Finance",
    topics: [
      "Walk-Forward Validation",
      "Label Purging",
      "Bitcoin",
      "CNN-GAF",
    ],
    htmlPath: "/notebooks/deep-learning/dl-gwp2/dl-gwp2.html",
  },
  {
    id: "sm-gwp1",
    slug: "sm-gwp1",
    title: "Short-Maturity Option Pricing with the Heston Model",
    description:
      "Calibrate the Heston model to 15-day SM Energy options using Lewis and Carr-Madan Fourier methods, then price a 20-day ATM Asian call with Monte Carlo.",
    category: "Stochastic Modeling",
    topics: ["Heston Model", "Fourier Pricing", "Monte Carlo", "Asian Options"],
    htmlPath: "/notebooks/stochastic-modeling/sm-gwp1/sm-gwp1.html",
  },
  {
    id: "sm-gwp2",
    slug: "sm-gwp2",
    title: "Regime-Based ETF Allocation: Market Data Pipeline",
    description:
      "Build a clean dataset for a VIX-regime rotation strategy across TLT, GLD, and SPY with aligned returns, volatility changes, and exploratory analysis.",
    category: "Stochastic Modeling",
    topics: ["Regime Allocation", "VIX", "ETF Returns", "Data Pipeline"],
    htmlPath: "/notebooks/stochastic-modeling/sm-gwp2/sm-gwp2.html",
  },
  {
    id: "fdp-gwp1",
    slug: "fdp-gwp1",
    title: "European Option Pricing with Binomial Trees",
    description:
      "Apply put-call parity and binomial tree methods to price European calls and puts, estimate delta, and analyze convergence toward Black-Scholes values.",
    category: "Financial Derivatives Pricing",
    topics: ["Binomial Trees", "Put-Call Parity", "Delta", "European Options"],
    htmlPath: "/notebooks/derivatives-pricing/fdp-gwp1/fdp-gwp1.html",
  },
  {
    id: "fdp-gwp2",
    slug: "fdp-gwp2",
    title: "Stochastic Volatility, Jump Diffusion, and American Options",
    description:
      "Price options under stochastic volatility and jump models, estimate delta and gamma by finite differences, and analyze American exercise with least-squares Monte Carlo.",
    category: "Financial Derivatives Pricing",
    topics: [
      "Stochastic Volatility",
      "Jump Diffusion",
      "LSMC",
      "Greeks",
    ],
    htmlPath: "/notebooks/derivatives-pricing/fdp-gwp2/fdp-gwp2.html",
  },
];

export function getQuantProject(slug: string) {
  return quantProjects.find((project) => project.slug === slug);
}
