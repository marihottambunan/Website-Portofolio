"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Award,
  Users,
  Code,
  Database,
  Brain,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Eye,
  ZoomIn,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    "Aspiring Data Specialist & Machine Learning Enthusiast",
    "Software Engineering Technology Student with hands-on experience in data analysis, data engineering, and ML projects, passionate about building clean, reliable, and insightful datasets.",
  ]  

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex <= currentText.length) {
        setTypedText(currentText.slice(0, currentIndex))
        currentIndex++
        setTimeout(typeText, 50)
      } else {
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setTypedText("")
          currentIndex = 0
        }, 2000)
      }
    }

    typeText()
  }, [currentTextIndex])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = {
    "Data & Database": ["Tableau", "Power BI (Microsoft)", "Excel", "MySQL", "PostgreSQL", "MongoDB", "Hadoop", "Cassandra"],
    Programming: ["Python", "Java", "C", "PHP", "JavaScript", "Go"],
    Backend: ["PHP (Laravel)", "RESTful API", "Microservices"],
    Frontend: ["React", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
    "Tools & Design": ["Figma", "Adobe XD", "Git", "Agile/Scrum"],
  }

  const projects = [
    {
      title: "Machine Learning Engineer Intern",
      company: "DBS Foundation Coding Camp",
      period: "Jan 2025 - Present",
      description: "Intensive bootcamp focused on data science and machine learning technologies",
      highlights: [
        "Mastered SQL and Python with Pandas, NumPy, Matplotlib",
        "Developed ML capabilities from basics to practical implementation",
        "Applied end-to-end data workflow and model deployment",
      ],
      tags: ["Python", "Machine Learning", "Data Science","Data Analytics","SQL"],
      github: "https://github.com/marihottambunan/Coding-Cap-by-DBS-Foundation.git",
      id: "ml-bootcamp",
    },
    {
      title: "Agricultural Data Collection System",
      company: "North Tapanuli Region",
      period: "Jan 2025 - Jun 2025",
      description: "Web-based system for agricultural potential data collection",
      highlights: [
        "Designed database architecture for agricultural data management",
        "Built automated data processing system for real-time statistics",
        "Developed data integration solutions for regional planning",
      ],
      tags: ["PostgreSQL", "PHP", "Data Processing", "Dashboard"],
      github: "https://github.com/gilberd-siboro/PA_3-Data_Pertanian.git",
      id: "agricultural-system",
    },
    {
      title: "MediVize Drug Information System",
      company: "Web-Based Image Classification",
      period: "Apr 2025 - Jun 2025",
      description: "Web-based application for identifying drugs via image classification",
      highlights: [
        "Implemented YOLOv11 model for drug packaging image classification",
        "Applied data cleaning, preprocessing, and augmentation using NumPy",
        "Evaluated model performance using accuracy and detection metrics"
      ],
      tags: ["YOLOv11", "NumPy", "Machine Learning", "Computer Vision"],
      github: "https://github.com/kyntar/medivize.git",
      id: "medivize"
    },    
    {
      title: "Learning Style Prediction Model",
      company: "IT Del Research Project",
      period: "Oct 2024 - Dec 2024",
      description: "ML model to predict student learning styles using Felder-Silverman Model",
      highlights: [
        "Implemented data preprocessing with StandardScaler and SMOTE",
        "Achieved 97% accuracy with K-Means, SVM, Random Forest",
        "Applied hyperparameter tuning using GridSearchCV",
      ],
      tags: ["Machine Learning", "Python", "Data Preprocessing", "Classification"],
      github: "https://github.com/FransElo21/Proyek_PM_Kel11.git",
      id: "learning-style",
    },
    {
      title: "Balige Traditional Market Platform",
      company: "Web-based Marketplace",
      period: "Jan 2024 - Jun 2024",
      description: "Multi-vendor marketplace platform for traditional market",
      highlights: [
        "Designed scalable database architecture using MySQL",
        "Built automated workflows for inventory and order tracking",
        "Developed vendor onboarding and reporting systems",
      ],
      tags: ["MySQL", "PHP", "Laravel", "E-commerce"],
      github: "https://github.com/VeriMarpaung/Balige-Traditional-Marketplace.git",
      id: "balige-market",
    },
    {
      title: "Microservices E-Commerce",
      company: "Traditional Market Platform",
      period: "Apr 2024 - May 2024",
      description: "Scalable e-commerce platform using microservices architecture",
      highlights: [
        "Designed 5 independent microservices architecture",
        "Built distributed data processing system",
        "Developed API-based communication between services",
      ],
      tags: ["Go", "Laravel", "Microservices", "API"],
      github: "https://github.com/marihottambunan/PA2_PASTI.git",
      id: "microservices-ecommerce",
    },
    {
      title: "Rumata Coffee Digital Marketing Website",
      company: "Web-based Information System",
      period: "Jan 2023 - Jun 2023",
      description: "Digital marketing website for promoting Rumata Coffee products and services",
      highlights: [
        "Designed database with multi-level user access using Native PHP and MySQL",
        "Built automated CMS for product and feedback management",
        "Integrated external APIs (Google Maps, WhatsApp) for seamless connectivity"
      ],
      tags: ["PHP", "MySQL", "CMS", "API Integration"],
      github: "https://github.com/HandikaRonny/Rumata-Coffee-Website-using-PHP-Native.git",
      id: "rumata-coffee"
    }
    
  ]

  const organizations = [
    {
      role: "Head of Public Relations, Publication and Career Commission",
      organization: "MPM - Institut Teknologi Del",
      period: "Sep 2024 - Present",
      description: "Led strategic communication and digital media management",
    },
    {
      role: "Event Division Member",
      organization: "HIMAPRO - Institut Teknologi Del",
      period: "Sep 2023 - Sep 2024",
      description: "Managed events and coordinated with multiple divisions",
    },
    {
      role: "Security & Infrastructure",
      organization: "KPU - Institut Teknologi Del",
      period: "Apr 2024 - Nov 2024",
      description: "Managed security protocols for campus election processes",
    },
    {
      role: "Member",
      organization: "GDSC - Institut Teknologi Del",
      period: "Sep 2023 - Present",
      description: "Applied Google technologies to solve real-world challenges",
    },
  ]

  const certifications = [
    {
      title: "Machine Learning Terapan | Dicoding (2025)",
      image: "./serti_1.png",
    },
    {
      title: "Belajar Dasar Visualisasi Data | Dicoding (2025)",
      image: "./serti_2.png",
    },
    {
      title: "Belajar Analisis Data dengan Python | Dicoding (2025)",
      image: "./serti_3.png",
    },
    {
      title: "Belajar Fundamental Deep Learning | Dicoding (2025)",
      image: "./serti_4.png",
    },
    {
      title: "Data Science Project: Predictive Analytics | Eduwork.id (2024)",
      image: "./serti_5.png",
    },
    {
      title: "Python Fundamental for Data Science | DQlab (2024)",
      image: "./serti_6.png",
    },
    {
      title: "Data Engineering Project: Taxi Travel Data Analysis | Dibimbing.id (2024)",
      image: "./serti_7.png",
    },
    {
      title: "Google UX Design Professional Certificate",
      image: "./serti_8.png",
    },
    {
      title: "Fintech Apps: UI/UX Class Program | Eduwork.id (PT Talenta Sinergi Group)",
      image: "./serti_9.png",
    },
    {
      title: "Software Engineering Fundamentals Course | RevoU",
      image: "./serti_10.png",
    },
    {
      title: "Web Development Series 3.0 | Dibimbing.id",
      image: "./serti_11.png",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const handleCertificateClick = (cert: any) => {
    setSelectedCertificate(cert)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gradient-to-br from-slate-900 to-gray-900" : "bg-gradient-to-br from-white to-gray-50"}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.05,
              }}
              className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
            >
              Marihot Tambunan
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 dark:from-slate-900 dark:via-gray-900 dark:to-stone-900"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative w-48 h-48 mx-auto mb-8"
              >
                {/* Animated glow rings */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 opacity-75"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                </motion.div>

                {/* Secondary glow ring */}
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-0.5 opacity-50"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                </motion.div>

                {/* Profile photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                >
                  <img
                    src="./Profile.jpg"
                    alt="Marihot Josua Tambunan"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                    animate={{
                      x: [0, Math.cos((i * 60 * Math.PI) / 180) * 72],
                      y: [0, Math.sin((i * 60 * Math.PI) / 180) * 72],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Marihot Josua Tambunan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
            >
              Aspiring Data Specialist & Machine Learning Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Software Engineering Technology Student with hands-on experience in data analysis, data engineering, and ML projects, passionate about building clean, reliable, and insightful datasets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                Get In Touch
              </Button>
              <a href="/Marihot Josua Tambunan-resume.pdf" download>
                <Button
                  variant="outline"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a sixth-semester Software Engineering Technology student at Institut Teknologi Del with strong
                interests in Data Analysis, Data Science, and Data Engineering. I have completed multiple data projects
                using SQL, Python, and data visualization tools.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a solid academic background and practical experience, I am motivated to contribute as a Data
                Specialist in a dynamic environment. Currently maintaining a GPA of 3.29/4.00 and expected to graduate
                in September 2026.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.29</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GPA</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Card className="p-6 bg-white dark:bg-gray-700 border-0 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">Balige, North Sumatera, Indonesia</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">marihottambunan37@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600 dark:text-gray-300">085794648310</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                  <a
                    href="https://www.linkedin.com/in/marihot-tambunan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-white to-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                      {category === "Data & Database" && <Database className="w-5 h-5 text-blue-600" />}
                      {category === "Programming" && <Code className="w-5 h-5 text-green-600" />}
                      {category === "Backend" && <Brain className="w-5 h-5 text-purple-600" />}
                      {category === "Frontend" && <ExternalLink className="w-5 h-5 text-orange-600" />}
                      {category === "Tools & Design" && <Award className="w-5 h-5 text-red-600" />}
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                          {project.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                      >
                        <Eye className="w-4 h-4" />
                        <span>See Details</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-white to-slate-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership & Organizations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <motion.div
                key={org.organization}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 dark:text-white">{org.role}</CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                          {org.organization}
                        </CardDescription>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {org.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{org.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.slice(0, 6).map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <div className="aspect-video bg-gray-100 dark:bg-gray-600 relative overflow-hidden">
                    <motion.img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <Award className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                      </motion.div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{cert.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {certifications.length > 6 && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAllCertificates(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  See All Certificates ({certifications.length})
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 dark:from-slate-800 dark:via-gray-900 dark:to-stone-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in discussing data science opportunities, collaborating on projects, or just having
              a conversation about technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="mailto:marihottambunan37@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">marihottambunan37@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:085794648310"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-green-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">085794648310</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/marihot-tambunan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">LinkedIn</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Connect with me</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Location</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Balige, North Sumatera</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Marihot Josua Tambunan. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{selectedProject.company}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedProject.period}
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)} className="p-2">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    onClick={() => window.open(selectedProject.github, "_blank")}
                    className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Certificates Modal */}
      {showAllCertificates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">All Certifications</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowAllCertificates(false)} className="p-2">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => handleCertificateClick(cert)}
                  >
                    <div className="aspect-video bg-gray-100 dark:bg-gray-600 relative overflow-hidden">
                      <motion.img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                          <ZoomIn className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start space-x-3">
                        <Award className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-1" />
                        <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{cert.title}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button variant="outline" onClick={() => setShowAllCertificates(false)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Certificate Image Popup */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Certificate image */}
            <div className="relative">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Certificate title */}
            <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedCertificate.title}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
