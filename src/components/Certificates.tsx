import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";


const certificates = [
  {
    title: "Machine Learning Statistical Foundations",
    issuer: "Wolfram",
    date: "Oct 2025",
    iconUrl: "https://content.wolfram.com/sites/43/2018/12/spikey-wolfram-logo.png",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQE7zWsUaSFzFg/feedshare-shrink_1280/B4DZnkmg2vIEAs-/0/1760476925648?e=1763596800&v=beta&t=tOcSyBR6HpgBjjy8t1t622y-1XtLQN_vekxnZrAABLE",
  },
  {
    title: "LambdaTest Software Testing Professional",
    issuer: "LambdaTest",
    date: "Oct 2025",
    iconUrl: "https://www.theladders.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcompany-photo.theladders.com%2F50313%2F082cd5db-4f9f-4ad1-afeb-7738b122198a.jpg&w=1080&q=75",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQF_aZcoFMKIWQ/feedshare-shrink_1280/B4DZnqgz3OJIAs-/0/1760576093916?e=1763596800&v=beta&t=B3ggJCthREZ8cIQGgtt-ehRmDg_vA4PfNtIdrUo8nec",
  },
  {
    title: "Ubuntu Linux Professional",
    issuer: "Canonical",
    date: "Oct 2025",
    iconUrl: "https://i0.wp.com/www.webpronews.com/wp-content/uploads/2024/04/Canonical-Logo.png?fit=1920%2C1080&ssl=1",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQGoOLq8hkIffA/feedshare-shrink_1280/B4DZoJ6NkzGgAs-/0/1761102846512?e=1763596800&v=beta&t=X0h7MvgstrX2ySpkEcYqi0I0HyldhT1QzOjJocZ2fys",
  },
  {
    title: "Microsoft Azure AI",
    issuer: "Microsoft",
    date: "Oct 2025",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQFv1FnxxmQP_A/feedshare-shrink_1280/B4DZnKm12CGQAw-/0/1760040804001?e=1763596800&v=beta&t=jk3I8J1QnxlxnCnmV8W2KS35MHp_wF725sLRti311mo",
  },
  {
    title: "GitHub Professional",
    issuer: "GitHub",
    date: "Oct 2025",
    iconUrl: "https://a.slack-edge.com/80588/img/plugins/github/service_512.png",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQE10mtD6562LA/feedshare-shrink_1280/B4DZnZxr4UHwAs-/0/1760295305020?e=1763596800&v=beta&t=p8BI4kF5yxy5rtb78mmgtUatj5FzjKMmsFw3Y-eZ6LE",
  },
  {
    title: "Microsoft CE in Software Development",
    issuer: "Microsoft",
    date: "Oct 2025",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHLG60OFLkVyQ/feedshare-shrink_1280/B4DZnQpxDmGgAs-/0/1760142234103?e=1763596800&v=beta&t=2L06qLnHjiry-TZxNTX6Gk1TnUue5nDRLtEuyYnCxMA",
  },
  {
    title: "Fortinet Network Expert, NSE1 & NSE2",
    issuer: "Fortinet",
    date: "Jun 2021",
    iconUrl: "https://web-assets.claroty.com/fortinet-logo.wine.png",
    credentialUrl: "https://placeholder-credential-url.com",
  },
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Certificates & Credentials
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
               href={cert.credentialUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-gray-300 rounded-xl hover:border-gray-900 hover:shadow-lg hover:shadow-gray-300/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors border border-gray-300 flex items-center justify-center flex-shrink-0">
                <ImageWithFallback
                  src={cert.iconUrl}
                  loading="lazy"
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-contain rounded"
                />

                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
