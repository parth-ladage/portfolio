export const allProjects = [
  {
    slug: 'customer-churn-prediction',
    emoji: '📊',
    image: '/images/project-churn.png',
    title: 'Customer Churn Prediction & Risk Segmentation',
    desc: 'An end-to-end machine learning pipeline predicting telecom customer churn and segmenting customers into actionable risk tiers.',
    features: [
      'Multi-model classification comparison',
      'Dynamic risk tier segmentation',
      'Actionable business recommendations'
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    isFeatured: true,
    github: 'https://github.com/parth-ladage/ChurnAnalysis_Parth_Ladage',
    content: {
      overview: [
        "The Customer Churn Prediction & Risk Segmentation project is an end-to-end machine learning pipeline built to predict telecom customer churn and segment customers into actionable risk tiers. The project uses the IBM Telco Customer Churn dataset (~7,043 customers, 21 features) and combines exploratory data analysis with multi-model classification and an interactive, production-grade Streamlit dashboard.",
        "Rather than treating churn prediction as a binary classification exercise, this project emphasizes extracting meaningful business insights from data—identifying why customers leave and who is most at risk—so that retention teams can act proactively. Key findings include: ~26.5% of customers have churned (≈1 in 4), month-to-month customers churn at ~42%, churned customers have an average tenure of ~18 months, and higher monthly charges correlate strongly with churn. The best model (Gradient Boosting) achieves a ROC-AUC of ~0.84.",
        "The project is delivered as two complementary deliverables: a Jupyter Notebook (analysis.ipynb) for deep EDA and model experimentation, and a Streamlit Dashboard (dashboard/app.py) that provides real-time, filterable analytics with risk segmentation and business recommendations."
      ],
      architecture: [
        "The system architecture follows a robust ML workflow and is delivered through a modular project structure:",
        "**Data Ingestion & Preprocessing (Pandas, NumPy):** Loads and cleans the CSV dataset, coerces data types, handles null values, performs one-hot encoding of categorical features, and standardizes numerical features using Scikit-learn's StandardScaler.",
        "**Model Training Pipeline (Scikit-learn, XGBoost):** Trains and evaluates four distinct classifiers: Logistic Regression (linear baseline), Random Forest (ensemble bagging), Gradient Boosting (sequential boosting), and XGBoost (gradient-boosted trees).",
        "**Risk Segmentation Layer:** Assigns churning probability to every customer using the best model and categorizes them into High Risk (>60%), Medium Risk (30%–60%), and Low Risk (<30%) tiers using Pandas `pd.cut`.",
        "**Presentation Layer (Streamlit, Plotly):** A wide-layout, single-page application (`app.py`) that handles dynamic filtering, visualization rendering, and displays business recommendations. Caching (`@st.cache_data` / `@st.cache_resource`) is heavily utilized to optimize data loading and model training.",
        "**Design System:** The dashboard uses a fully custom CSS design system (~221 lines) featuring a dark theme, glassmorphism-style KPI cards with indigo gradients, color-coded risk cards, and Font Awesome vector icons for a premium user experience."
      ],
      features: [
        "**Multi-Model Comparison Pipeline:** Simultaneously trains and evaluates four classification models, automatically identifying and badging the best-performing model by ROC-AUC score to generate customer risk scores.",
        "**Dynamic Sidebar Filtering:** Empowers users to slice the entire dashboard in real-time using five interactive filters (Contract Type, Internet Service, Payment Method, Senior Citizen, Tenure Range), with all KPIs and charts updating instantly.",
        "**Risk Tier Segmentation:** Segments customers into High (🔴), Medium (🟡), and Low (🟢) risk tiers, displaying summary statistics for each tier to provide a clear retention playbook.",
        "**Interactive Visualizations:** Features six rich, Plotly-powered visualizations including Churn Distribution (donut chart), Churn Rate by Contract (bar chart), Tenure Distribution (KDE density plot), Tenure vs Monthly Charges (scatter plot), ROC Curve Comparison, and Feature Importance.",
        "**Actionable Business Recommendations:** Programmatically generates data-driven retention strategies (e.g., target the first 6–12 months, incentivize longer contracts, optimize pricing, improve premium support).",
        "**Premium Dark-Theme UI:** A sleek, modern interface utilizing Inter typography, glassmorphism elements, and consistent Plotly theming."
      ],
      lessons: [
        "**Metric Selection for Imbalanced Data:** Reinforced the importance of using ROC-AUC instead of simple accuracy. With a ~26.5% churn rate, a naive classifier would hit ~73.5% accuracy. ROC-AUC properly evaluates the model's ability to distinguish between classes.",
        "**Feature Engineering Over Model Complexity:** Discovered that well-engineered derived features (like ChargesPerMonth and SeniorWithNoSupport) added meaningful signal, and simpler models (Gradient Boosting) sometimes outperformed complex ones (XGBoost) when features were robust.",
        "**Caching in ML Dashboards:** Learned that Streamlit's `@st.cache_data` and `@st.cache_resource` are essential. Separating data loading caching from model training caching prevented redundant computation and multi-second load times upon user interaction.",
        "**The Value of Custom Styling:** Realized that investing time in custom CSS (gradient cards, custom fonts, icons) transforms a basic data script into a professional, trustworthy data product suitable for business stakeholders.",
        "**Architectural Separation of Concerns:** Found that maintaining a separate Jupyter Notebook for EDA/experimentation and a Streamlit app for production analytics is a scalable and highly effective pattern for ML projects.",
        "**Careful Preprocessing of Categorical Data:** Understood the necessity of meticulous preprocessing in mixed pipelines, such as ensuring one-hot encoded target columns are excluded from feature sets to avoid data leakage, and applying appropriate scaling per model type."
      ]
    }
  },
  {
    slug: 'ml-monitoring-system',
    emoji: '🧩',
    image: '/images/project-ml-monitoring.png',
    title: 'ML Monitoring & Drift Detection System',
    desc: 'A production-focused system to monitor ML models and detect data and concept drift in real time.',
    features: [
      'Automated drift detection pipelines',
      'Continuous performance monitoring',
      'Designed for reliable ML in production',
    ],
    tech: ['Python', 'ML', 'Data Pipelines'],
    isFeatured: true,
    github: 'https://github.com/parth-ladage/ml-monitoring-system',
  },
  {
    slug: 'quickbill',
    emoji: '💳',
    image: '/images/project-quickbill.png',
    title: 'QuickBill (ML-Integrated Billing System)',
    desc: 'A smart billing platform enhanced with machine learning for automation and financial insights.',
    features: [
      'Intelligent expense categorization',
      'Prediction-based insights',
      'Scalable backend architecture',
    ],
    tech: ['Python', 'FastAPI', 'ML'],
    isFeatured: false,
    github: 'https://github.com/parth-ladage/QuickBill',
    content: {
      overview: [
        "QuickBill is a comprehensive, omni-channel invoice management and business analytics platform tailored for freelancers and small business owners. It provides seamless cross-device synchronization through a robust \"headless\" Node.js backend, delivering an intuitive desktop experience via a React web app and on-the-go accessibility through a React Native mobile app. Going beyond standard invoicing, QuickBill features an integrated, AI-driven Python microservice that analyzes historical payment patterns to predict estimated pay dates, empowering business owners to forecast and manage their cash flow effectively."
      ],
      architecture: [
        "The system adopts a modern polyglot microservice-based architecture, structured as a monorepo for efficient development and deployment. It is decoupled into four core components:",
        "**Backend API (Node.js, Express, MongoDB):** Serves as the central nervous system. It is a RESTful API responsible for user authentication (JWT), secure database transactions (Mongoose), server-side PDF generation, and acting as the gateway to the ML service.",
        "**Web Application (React, Vite, TypeScript, Tailwind CSS):** A responsive desktop dashboard designed for deep-dive analytics. It leverages recharts to render dynamic data visualizations of business health and revenue.",
        "**Mobile Application (React Native, Expo):** A cross-platform mobile client (iOS & Android) that allows users to manage clients, create invoices, and check stats on the go, utilizing react-native-gifted-charts for mobile-optimized analytics.",
        "**Machine Learning Microservice (Python, Flask, Scikit-learn, Pandas):** An isolated analytical engine that ingests historical invoice data to train personalized predictive models. It exposes inference endpoints that the main backend consumes to estimate invoice settlement dates."
      ],
      features: [
        "**Omni-Channel Ecosystem:** Seamlessly create, read, update, and delete (CRUD) clients and invoices across Web and Mobile interfaces with real-time data synchronization.",
        "**AI-Powered Cash Flow Prediction:** Built-in machine learning model that learns from individual client payment behaviors to accurately predict when pending or overdue invoices will be settled.",
        "**Advanced Analytics Dashboard:** Interactive data visualizations tracking critical metrics like \"Total Revenue,\" \"Outstanding Revenue,\" monthly revenue trends, and top clients by revenue.",
        "**Automated PDF Generation:** Server-side HTML-to-PDF conversion for professional invoices featuring custom company branding, automated tax/platform fee calculations, and smart sequential numbering (INV-YYYYMMDD-NNN).",
        "**Secure Authentication:** Robust JWT-based authorization protecting sensitive financial data and restricting API access to authenticated users.",
        "**High-Performance UX:** Implemented debounced search functionality for instant filtering of clients and invoices across large datasets."
      ],
      lessons: [
        "**Microservices Orchestration:** Gained practical experience designing and managing inter-service communication between a Node.js core backend and a Python Flask ML service, including handling asynchronous API contracts and fault tolerance.",
        "**API Design for Multiple Clients:** Mastered the challenge of designing a single \"headless\" REST API that elegantly and efficiently serves two vastly different frontend consumers (React Web and React Native), ensuring consistent data models and authorization flows.",
        "**Operationalizing Machine Learning:** Bridged the gap between web development and data science by successfully building, training, and deploying a Scikit-Learn model within a web ecosystem to deliver tangible business value to end-users.",
        "**Monorepo Management:** Learned to effectively structure and navigate a multi-project monorepo, keeping package dependencies isolated while ensuring the entire system can be spun up and tested cohesively during local development.",
        "**Cross-Platform UI/UX:** Enhanced skills in translating complex dashboard UI patterns between a browser environment (Tailwind/CSS) and a native mobile environment (React Native StyleSheets)."
      ]
    }
  },
  {
    slug: 'f1-strategy-optimization',
    emoji: '🏎️',
    image: '/images/project-f1-strategy.png',
    title: 'F1 Virtual Pit Wall: Dynamic Strategy Optimization Engine',
    desc: 'A data-driven system for optimizing race strategies using predictive modeling and simulations.',
    features: [
      'Strategy optimization using historical + real-time data',
      'Scenario simulation engine',
      'Decision-focused analytics',
    ],
    tech: ['Python', 'Data Analysis', 'ML'],
    isFeatured: true,
    github: 'https://github.com/parth-ladage/Dynamic-Strategy-Optimization-Engine',
    content: {
      overview: [
        "The F1 Virtual Pit Wall is a real-time race strategy optimization engine that bridges the gap between predictive machine learning and interactive web applications. It uses Machine Learning and Dynamic Programming to forecast tire degradation and compute the mathematically optimal pit-stop windows for Formula 1 races. To make the complex data accessible, the system integrates a Google Gemini-powered \"AI Race Engineer\" that translates statistical probabilities and strategy choices into plain English context, simulating a real pit wall experience."
      ],
      architecture: [
        "The application is built on a decoupled architecture, separating the heavy data processing backend from the interactive frontend:",
        "**Backend (Python, FastAPI):**",
        "**Data Ingestion & Caching:** Utilizes the fastf1 library to pull historical telemetry data. Implements a smart LRU caching layer and a \"Time Machine\" fallback mechanism to load previous years' data if current-year session data is unavailable.",
        "**Machine Learning Engine:** Features a tiered model loader. It first attempts to load pre-trained XGBoost and Linear Regression models from a registry to predict tire degradation based on tire age, lap number, track temperature, and air temperature. If unavailable, it seamlessly falls back to training a model on-the-fly.",
        "**Optimization & Simulation:** Computes deterministic race times for various pit strategies (1-stop vs. 2-stop). It then runs Monte Carlo simulations (1,000 iterations), injecting variables like Safety Car probabilities and traffic variance to assign robust \"Win Probabilities\" and \"Risk Scores\" to each strategy.",
        "**Lightweight RAG System:** Implements a custom Retrieval-Augmented Generation (RAG) system for the AI Engineer. Instead of heavy vector databases, it uses Gemini to generate vector embeddings and pure NumPy for cosine similarity, ensuring lightning-fast context retrieval from the F1 knowledge base.",
        "**Frontend (React.js, Tailwind CSS):**",
        "**Interactive Dashboard:** A highly visual interface that consumes the backend API to display optimal strategies, win probabilities, and race times.",
        "**Dynamic Visualizations:** Parses raw stint data to render dynamic visual timelines (stint bars) representing pit stops and tire compounds, alongside interactive pacing charts (Chart.js).",
        "**AI Integration:** Features a RaceEngineerBot component that displays LLM-generated strategic verdicts based on the backend's statistical output."
      ],
      features: [
        "**Predictive Tire Degradation Modeling:** Forecasts tire wear and lap times using XGBoost regression trained on real FastF1 historical telemetry and weather data.",
        "**Monte Carlo Risk Analysis:** Moves beyond simple math by running 1,000 race simulations with injected noise (Safety Cars, traffic) to calculate realistic strategic win probabilities and risk scores.",
        "**AI Race Engineer (LLM Integration):** Utilizes Google Gemini 1.5 Flash to provide human-like, context-aware explanations of strategy choices (e.g., explaining why a 2-stop Aggressive strategy beats a 1-stop Conservative plan).",
        "**Serverless-Friendly RAG:** Features a hyper-efficient, NumPy-based cosine similarity search for knowledge retrieval, eliminating the overhead of dedicated vector databases.",
        "**Robust Fallback Systems:** Ensures high availability with a tiered model loader (Registry → On-the-fly training) and historical data fallbacks.",
        "**Interactive Visual Dashboard:** Beautiful, dark-themed React UI with dynamic stint timelines, telemetry, and interactive pacing charts."
      ],
      lessons: [
        "**Handling Real-World Variance:** I learned that purely deterministic math often fails in the real world. Transitioning the optimization engine to use Monte Carlo simulations was a game-changer. By accounting for the probability of Safety Cars and traffic variance, the system provided much more robust and realistic strategy recommendations.",
        "**Performance vs. Complexity in AI:** While building the RAG system, I realized that for smaller, specialized knowledge bases, spinning up a heavy vector database (like Chroma or Pinecone) is overkill. Building a pure NumPy-based cosine similarity search proved to be significantly faster, easier to maintain, and completely serverless-friendly.",
        "**The Importance of Graceful Degradation:** Working with external APIs and real-time historical data taught me to anticipate missing information. Implementing the tiered model loader and \"Time Machine\" data fallback ensured the application remained functional and didn't crash even when specific driver telemetry or pre-trained models were unavailable.",
        "**Bridging Data Science and UX:** Presenting complex ML outputs (like XGBoost predictions and statistical risk scores) in an intuitive way was a major challenge. I learned how to transform raw mathematical arrays into visual stint timelines and use an LLM to translate raw statistics into engaging \"Team Radio\" verdicts, making the tool accessible to non-technical users."
      ]
    }
  },
  {
    slug: 'fraud-detection-system',
    emoji: '🛡️',
    image: '/images/project-fraud-detection.png',
    title: 'Fraud Detection System (Explainable AI)',
    desc: 'An end-to-end, real-time financial fraud detection system combining a highly tuned LightGBM classifier with SHAP to flag fraudulent transactions and generate explanations.',
    features: [
      'Explainable AI (XAI) using SHAP',
      'Dynamic Risk Segmentation dashboard',
      'Production-Ready Optimized Pipeline'
    ],
    tech: ['Python', 'LightGBM', 'SHAP', 'Streamlit'],
    isFeatured: true,
    github: 'https://github.com/parth-ladage/FraudDetection_Parth_Ladage',
    deployedUrl: 'https://fraud-detection-system-pl.streamlit.app/',
    content: {
      overview: [
        "Financial fraud costs the global economy over $5 trillion annually. While Machine Learning is incredibly powerful at catching fraudulent transactions, traditional ML models suffer from the \"black box\" problem. When an AI blocks a transaction, human investigators and compliance teams need to know why, but the AI can't tell them.",
        "I built this project to solve that exact problem. This is an end-to-end, real-time financial fraud detection system that doesn't just catch fraud—it explains it. By combining a highly tuned LightGBM classifier with SHAP (SHapley Additive exPlanations), the system flags suspicious transactions with high precision and instantly generates plain-English, visual explanations for investigators. It bridges the gap between complex AI and human decision-making."
      ],
      architecture: [
        "To handle a massive 590K+ transaction dataset and deploy it seamlessly without hitting cloud memory bottlenecks, I designed a highly optimized data and machine learning pipeline:",
        "**Data Engineering & Imbalance Handling:** Financial data is notoriously imbalanced (fraud is rare). I utilized SMOTE (Synthetic Minority Over-sampling Technique) during the EDA and training phase to synthetically balance the dataset, preventing the model from simply predicting \"Not Fraud\" every time.",
        "**Model Training:** I trained a LightGBM gradient boosting classifier, chosen for its exceptional speed and performance on tabular data. I then utilized Optuna to perform automated hyperparameter tuning, specifically optimizing for the Precision-Recall AUC metric.",
        "**The Parquet Optimization Engine:** Cloud hosts like Streamlit Cloud or GitHub have strict memory limits. Instead of loading a massive dataset into the web app, I engineered a custom data-prep script. It takes a stratified sample (preserving rare fraud cases), applies necessary transformations, and compresses it into a highly efficient .parquet file (~5MB).",
        "**Live Operations Dashboard:** The frontend is built in Streamlit. It loads the pre-processed Parquet data and the model.pkl file to generate real-time inferences and render interactive SHAP plots directly in the browser."
      ],
      features: [
        "**Explainable AI (XAI):** The core feature of this project. Instead of a simple \"Yes/No\" verdict, the system uses SHAP values to visually break down exactly which features (e.g., transaction amount, matching email domains, unusual locations) drove the model's decision.",
        "**Dynamic Risk Segmentation:** Transactions aren't just flagged; they are automatically binned into actionable tiers—Critical Risk, Suspicious, and Clear—acting as a triage system for human analysts.",
        "**High-Precision Performance:** The model achieved a 0.799 PR-AUC score. In a real-world scenario scaled to this transaction volume, this level of precision represents a potential $175.3M in annual fraud prevention savings.",
        "**Production-Ready Deployment:** A lightning-fast, interactive command-center UI deployed live on the cloud, simulating a real-world investigator's workspace."
      ],
      lessons: [
        "**Accuracy is a Trap in Fraud Detection:** I learned firsthand why standard \"Accuracy\" is a terrible metric for highly imbalanced datasets. If fraud is only 0.1% of transactions, a model that guesses \"Not Fraud\" every time is 99.9% accurate but completely useless. I learned to focus on and optimize for Precision-Recall AUC (PR-AUC) to measure true performance.",
        "**Deployment Requires Engineering, Not Just Data Science:** Training a model locally on 16GB of RAM is very different from deploying it to a cloud server with 1GB of RAM. Engineering the Parquet compression pipeline taught me the importance of data serialization and memory management in production ML systems.",
        "**The Business Value of Transparency:** I realized that in highly regulated industries like finance, a model's prediction is only as good as its explainability. Building the SHAP integration showed me that making AI interpretable is often the key to actually getting it adopted by real businesses."
      ]
    }
  },
  {
    slug: 'growmart',
    emoji: '🛒',
    image: '/images/project-growmart.png',
    title: 'GrowMart',
    desc: 'A comprehensive grocery e-commerce system integrating machine learning for intelligent product recommendations and streamlined shopping.',
    features: [
      'Full-stack e-commerce storefront',
      'Intelligent ML-powered product recommendations'
    ],
    tech: ['Web Development', 'ML', 'E-commerce'],
    isFeatured: false,
    github: 'https://github.com/parth-ladage/growmart',
    
  },
  {
    slug: 'job-market-analyzer',
    emoji: '💼',
    image: '/images/project-job-analyzer.png',
    title: 'Job & Internship Market Analyzer',
    desc: 'A data-driven application providing skill demand and trend analysis in the current job market.',
    features: [
      'Skill demand and trend analysis',
      'Data-driven insights'
    ],
    tech: ['Python', 'Streamlit', 'Data Analysis'],
    isFeatured: false,
    github: 'https://github.com/parth-ladage/job-market-analyzer',
    deployedUrl: 'https://job-market-analyzer-pl.streamlit.app/',
    content: {
      overview: [
        "The Job Market Analyzer is a comprehensive, data-driven web application designed to track, analyze, and visualize real-time job and internship trends within the Data Science and AI domains in India. Built with Python and Streamlit, the application automates the extraction of job listings from major platforms like LinkedIn and Indeed using SerpAPI. It processes unstructured job descriptions to identify the most in-demand skills, simulates realistic salary/stipend ranges based on experience levels, and presents these insights through a premium, interactive multipage dashboard.",
        "Tech Stack: Python, Streamlit, Pandas, Plotly, SerpAPI (google-search-results), BeautifulSoup."
      ],
      architecture: [
        "The project follows a modular, multipage architecture to ensure scalability and clean code separation:",
        "**Data Ingestion Layer (src/job_fetcher.py):** Handles automated web scraping via SerpAPI, managing pagination and API requests across various data roles (Data Scientist, ML Engineer, Data Analyst, etc.).",
        "**Data Processing Layer:** Utilizes Pandas to clean raw JSON responses, handle missing values, and run a custom skill-extraction algorithm that matches job descriptions against a predefined list of high-value tech skills (e.g., Python, SQL, AWS, PyTorch).",
        "**Presentation Layer (app.py & pages/):** A Streamlit-powered multipage frontend (1_job_analytics.py and 2_internship_analytics.py) that separates full-time jobs from internships. It uses Plotly for interactive data visualization and custom CSS for a premium dark-themed UI.",
        "**Caching Mechanism (data/):** Fetched job and internship data is stored locally as CSV files to optimize performance, reduce API calls, and allow for instant dashboard rendering upon launch."
      ],
      features: [
        "**Automated Data Pipeline:** Fetches real-time job and internship postings across multiple platforms simultaneously, filtering specifically for the Indian tech market.",
        "**Intelligent Skill Extraction:** Automatically parses unstructured job descriptions to identify and aggregate required technical skills, providing a clear picture of current market demands.",
        "**Dynamic Market Simulation:** Algorithmically estimates realistic salaries (in INR) and internship stipends based on the specific role and categorized experience levels (Entry, Mid, Senior).",
        "**Multipage Analytics Dashboard:** Dedicated, distinct views for Jobs and Internships, allowing users to focus on their specific career stage.",
        "**Interactive Visualizations:** Features high-level KPI metrics and Plotly charts that highlight the top 10 most in-demand skills, the fastest-growing roles, and salary distributions.",
        "**Advanced Filtering:** Empowers users to dynamically filter the visualized market data by matched skills, specific job titles, geographic locations, or source platforms."
      ],
      lessons: [
        "**API Management & Rate Limiting:** Gained hands-on experience working with third-party APIs (SerpAPI), specifically learning how to implement pagination safely and manage request limits to prevent throttling.",
        "**Unstructured Data Processing:** Improved my Pandas proficiency by extracting structured insights (skills) from highly unstructured text (job descriptions) using robust string manipulation and mapping techniques.",
        "**UI/UX in Data Apps:** Learned how to transform a basic data script into a professional, user-friendly product. I discovered how to effectively use Streamlit's multipage features, layout containers, and custom CSS to build a scalable and visually appealing dashboard.",
        "**Performance Optimization:** Realized the importance of data caching. By saving processed data to CSVs, I significantly reduced dashboard load times and API dependency, ensuring a smooth experience for end-users."
      ]
    }
  },
  {
    slug: 'gym-management-app',
    emoji: '🏋️',
    image: '/images/project-gym-app.png',
    title: 'Gym MMS (Membership Management System)',
    desc: 'A full stack cloud-powered system for managing gym operations, including subscription tracking, payment processing, and dynamic invoice generation.',
    features: [
      'Role-Based Dashboards',
      'Smart Expiry Management System',
      'Dynamic Invoice Generation'
    ],
    tech: ['React', 'Firebase', 'TypeScript', 'TailwindCSS'],
    isFeatured: false,
    github: 'https://github.com/parth-ladage/gym-mms',
    content: {
      overview: [
        "Gym MMS is a full-stack, cloud-powered Gym Membership Management System built to streamline fitness center operations. It provides role-based, real-time dashboards for both gym administrators and members. The platform simplifies core gym management tasks including subscription tracking, payment processing, dynamic invoice generation, and automated membership expiry notifications via SMS and WhatsApp."
      ],
      architecture: [
        "The application is built using a modern, serverless architecture that relies on a React frontend and Firebase Backend-as-a-Service (BaaS).",
        "**Frontend Stack:** React 19, TypeScript, Vite, TailwindCSS, Lucide React (for iconography).",
        "**Backend & Database:** Firebase Authentication (for role-based auth), Cloud Firestore (NoSQL for user/payment/plan data), and Firebase Storage (for PDF invoices).",
        "**Routing & Access Control:** React Router DOM with a \"Gatekeeper\" ProtectedRoute component that enforces strict Role-Based Access Control (RBAC) for admin and member routes.",
        "**Key Integrations:**",
        "- **Razorpay:** Integrated for seamless checkout and payment handling.",
        "- **jsPDF:** Used for generating dynamic, client-side PDF receipts.",
        "- **Twilio (Messaging):** Designed to send SMS and WhatsApp alerts for upcoming membership renewals.",
        "**Codebase Structure:**",
        "- `/src/pages/` - Top-level route components (AdminDashboard, MemberDashboard, Login, Onboarding).",
        "- `/src/components/` - Modularized UI elements split by domain (/admin and /member).",
        "- `/src/lib/` - Core utility logic and integrations (firebase.ts, razorpay.ts, pdfGenerator.ts, messaging.ts)."
      ],
      features: [
        "**Role-Based Dashboards:**",
        "- **Member Portal:** Displays active subscription progress, an interactive BMI calculator, personal health stats (height/weight tracking), and historical payment transactions.",
        "- **Admin Portal:** A comprehensive command center to monitor gym statistics, manage user plans, oversee members, and handle content.",
        "**Smart Expiry Management System:** A dedicated dashboard for admins to filter members by expiry window (Next 7 Days, Next 30 Days, Expired) and trigger SMS/WhatsApp reminders directly from the UI.",
        "**Dynamic Invoice Generation:** Automatically generates branded PDF invoices upon successful payment using jsPDF, which are then securely uploaded and stored in Firebase Storage.",
        "**Payment Gateway Integration:** Integrated Razorpay checkout flow to securely process membership upgrades and renewals."
      ],
      lessons: [
        "**Client-Side Document Generation:** Gained hands-on experience using jsPDF to programmatically draw and format complex PDF documents (invoices) entirely on the client side before securely uploading them to cloud storage.",
        "**Implementing Secure RBAC:** Learned how to robustly secure React routes by combining Firebase Authentication state with Firestore custom user roles (Admin vs. Member), ensuring that unauthorized users cannot access sensitive endpoints.",
        "**Third-Party Script Management in React:** Navigated the intricacies of dynamically loading and managing the lifecycle of external scripts (like Razorpay's checkout script) within the React component lifecycle.",
        "**Real-time Data Filtering:** Improved understanding of Firestore compound queries and indexing while building the Expiry Management system to filter users based on complex date logic (e.g., plans expiring in exactly 7 or 30 days)."
      ]
    }
  }
];

export const featuredProjects = allProjects.filter(p => p.isFeatured);
export const otherProjects = allProjects.filter(p => !p.isFeatured);
