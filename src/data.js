// src/data.js

// src/data.js

export const projects = [
    {
      title: "Proteomics Chatbot",
      subtitle: "LLM | FAISS | Streamlit | Docker",
      description:
        "Built a Streamlit chatbot that queries protein data from UniProt using FAISS and LLM (Llama3.2:1b). Integrated vector search, UniProt API, and containerized the app with Docker.",
      image: "./assets/chatbot_p.webp",
      link: "https://github.com/Dipeshtripathi13/proteomics_chatbot",
    },
    {
      title: "Dental Caries Segmentation",
      subtitle: "PyTorch | U-Net | ResNet34",
      description:
        "Developed a segmentation model for detecting dental caries from panoramic X-rays using U-Net with ResNet34 encoder. Achieved robust results with IoU and Dice metrics.",
      image: "./assets/dental_seg.webp",
      link: "https://github.com/Dipeshtripathi13/Dental_carries_Segmentation.git",
    },
    {
      title: "Semantic Search for Nepali Documents",
      subtitle: "BERT | NLP | Flask | Angular",
      description:
        "Created a semantic search tool that finds relevant content in Nepali documents using BERT embeddings and cosine similarity. Frontend built with Angular, backend with Flask.",
      image: "./assets/semantic_search.png",
      link: "https://github.com/Dipeshtripathi13/Semantic_Search_in_Nepali_Document",
    },
    {
      title: "Text Summarization System",
      subtitle: "NLP | LSA | Transformers",
      description:
        "Implemented an extractive + abstractive summarization model using LSA and Transformers. Achieved 0.422 average ROUGE-L score for abstractive summaries.",
      image: "./assets/summarizer.png",
      link: "#",
    },
    {
      title: "Social Media Sentiment Analysis",
      subtitle: "Flask | React | SVM + Naive Bayes",
      description:
        "Built a web app that analyzes social media sentiment using a hybrid model (SVM + Naive Bayes). Achieved 93.53% accuracy for post classification.",
      image: "./assets/sentiment_analysis.jpg",
      link: "#",
    },
  ];
  
  export const skills = [
    "Python, C++, C#",
    "SQL, MsSQL, Snowflake",
    "AWS (EC2, S3, Lambda)",
    "Apache Kafka, Airflow",
    "Databricks, Pyspark",
    ".NET Core, Angular",
    "Flask, React",
    "NLP, Computer Vision",
    "Streamlit, LangChain",
    "Excel, PowerBI"
  ];
// src/data.js

export const blogs = [
    {
      title: "Automating Dental Caries Detection with Deep Learning",
      subtitle: "A U-Net Based Approach",
      description:
        "Learn how deep learning and medical imaging can be combined to segment dental caries using U-Net architecture on X-ray images.",
      link: "https://medium.com/@tripathidipesh13/automating-dental-caries-detection-with-deep-learning-a-u-net-based-approach-3238d5fe89d0",
      image: "./assets/dental_seg.webp", 
    },
    {
      title: "Building a Conversational AI for Protein Lookup",
      subtitle: "The Proteomics Chatbot",
      description:
        "Discover how I built a chatbot using LLMs, FAISS, and Streamlit to retrieve protein data from UniProt with a conversational interface.",
      link: "https://medium.com/@tripathidipesh13/building-a-conversational-ai-for-protein-lookup-the-proteomics-chatbot-d62e564d8e78",
      image: "./assets/chatbot_p.webp",
    },
  ];
  
export const socialMedia = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "./github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "./linkedin.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "./twitter.svg",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "./instagram.svg",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "./facebook.svg",
    }]