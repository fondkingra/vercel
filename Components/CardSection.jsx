import React from 'react';

const CardSection = () => {
  const projects = [
    {
      title: 'Fish BMI Prediction using YOLO',
      description: 'The Fish BMI Calculator is a tool that utilizes the YOLOv8 deep learning model to detect fish in video footage. It computes and displays the height, width, and Body Mass Index (BMI) of each detected fish based on bounding box dimensions. The output is an annotated video that overlays these metrics on the detected fish.',
      imageUrl: '/fish_bmi_thumbnail.jpg',
      projectUrl: 'https://github.com/fondkingra/Fish-bmi-prediction',
    },
    {
      title: 'Vision-Based Object Detection for AS-RS',
      description: 'This project contains a Python script for detecting and classifying bolts and nuts using a YOLO model via a live camera feed. It also estimates the size of detected objects and allows users to capture annotated frames.',
      imageUrl: '/captured_frame_with_sizes.jpg',
      projectUrl: 'https://github.com/fondkingra/Vision-based-object-detection-for-as-rs',
    },
    {
      title: 'AI-Based Safety Helmet for Mining Workers',
      description: 'Developed an AI-powered safety helmet for mining workers that incorporates a health prediction system. The helmet monitors vital signs like heart rate and body temperature in real-time, using TensorFlow for health prediction, ensuring worker safety in hazardous environments.',
      imageUrl: '/ai helmet thumbnail.jpeg',
      projectUrl: 'https://github.com/fondkingra/AI-Based-Safety-Helmet-for-Mining-Workers',
    },
    {
      title: 'Weather Web App',
      description: 'A weather web app provides real-time weather updates, forecasts, and climate insights using API data. It offers users location-based weather details, including temperature, humidity, and wind speed.',
      imageUrl: '/weather_thumbnail.webp',
      projectUrl: 'https://github.com/fondkingra/Weather-app',
    },
    {
      title: 'Smart Agriculture System Using IoT',
      description: 'Developed a Smart Agriculture System that integrates IoT sensors to monitor environmental parameters such as soil moisture, temperature, humidity, and pH levels. The system uses SMTP (Simple Mail Transfer Protocol) and message protocols (e.g., MQTT) to send alerts to farmers about critical conditions, ensuring timely intervention and optimizing agricultural productivity.',
      imageUrl: '/agri.jpeg',
      projectUrl: '#',
    },
    {
      title: 'React HN',
      description: 'A React and React Router-powered website that provides you with the latest news from Hacker News, implemented using the Firebase API.',
      imageUrl: '/hacker_web.png',
      projectUrl: 'https://insin.github.io/react-hn',
    },
  ];

  return (
    <div className="flex overflow-x-auto p-4 gap-4 w-full max-w-7xl mx-auto  scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-white/10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-white/20 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl bg-white/10 w-72 min-h-96 flex-shrink-0 m-4"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-white/80 mb-4">{project.description}</p>
            <a
              href={project.projectUrl}
              className="inline-block px-4 py-2 bg-white text-black rounded-lg transition-colors hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;