import React from "react";
import {motion} from "framer-motion"
const News = () => {
  const posts = [
    {
      id: 1,
      title: "SRIT students win the national level electric bike challenge!",
      href: "https://www.covaichronicle.com/english/contentview/srit--wins--kct",
      description:
        "The Student-team from Sri Ramakrishna Institute of Technology (SRIT) took part in the National Level Electric Bike Challenge (NEBC’23) organized by Kumaraguru College of Technology last month, and they successfully lifted the overall championship.         ",
      date: "Mar 16,2023",
      datetime: "2023-03-16",
      category: { title: "Coimbatore",  },
      author: {
        name: "Covai Chronicle",
        role: "Newspaper",
    
       
      },
    },
    {
      id: 2,
      title:
        "பெட்ரோல், பேட்டரி மூலம் இயங்கும் வாகனம்: ஸ்ரீ ராமகிருஷ்ணா கல்லூரி மாணவர்கள் சாதனை",
      href: "https://www.covaimail.com/?p=53397",
      description:
        "ஸ்ரீ ராமகிருஷ்ணா தொழில்நுட்பக் கல்லூரியின் இயந்திரவியல் மற்றும் மின்னியல், மற்றும் தொடர்பியல் துறை சார்ந்த இறுதி ஆண்டு மற்றும் முன்னாள் மாணவர்கள் பேட்டரி மற்றும் பெட்ரோல் மூலமாக இயங்கக்கூடிய இருசக்கர வாகனத்தை தயாரிக்கும் முயற்சியில் வெற்றி கண்டு சாதனை படைத்துள்ளனர்.",
      date: "Nov 06, 2021",
      datetime: "2021-11-06",
      category: { title: "Coimbatore",},
      author: {
        name: "Covai Mail",
        role: "Newspaper",
       
       
      },
    },
   
    {
      id: 3,
      title:
        "கோவையில் கலக்கும் ஸ்டார்ட் அப்; பெட்ரோல் ஸ்கூட்டருக்கு தீர்வு காணும் கிட்!",
      href: "https://tamil.samayam.com/latest-news/state-news/coimbatore-start-up-has-created-an-electric-conversion-kit-that-will-convert-petrol-scooter-to-hybrid/articleshow/85865857.cms",
      description:
        "கோவையை சேர்ந்த ஸ்டார்ட் அப் நிறுவனம் ஒன்று பெட்ரோல் ஸ்கூட்டரை எலக்ட்ரிக்-ஹைபிரிட் ஸ்கூட்டராக மாற்றும் கிட் ஒன்றை கண்டுபிடித்துள்ளது",
      date: "Sep 03, 2021",
      datetime: "2021-09-03",
      category: { title: "Coimbatore", },
      author: {
        name: "The Times of India- Samayam",
        role: "Newspaper",
       
       
      },
    },
  ];
  return (
    <>
      <div className=" py-5 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ x: -100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
              </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </motion.div>
          <div className=" mx-auto  grid max-w-2xl grid-cols-1 gap-y-5 gap-x-8 mt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                // viewport={{ once: true }}
                key={post.id}
                className="flex relative bg-[white] border-2 px-5 py-5  border-violet-900 rounded-xl max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-black">
                    {post.date}
                  </time>
                  <a
                   
                    
                    className="relative z-10 rounded-full bg-black px-3 py-1.5 font-medium text-white "
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}  target="_blank">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-900">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                 
                  <div className="text-sm leading-6">
                    <p className="font-bold text-black ">
                      <a >
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-black">{post.author.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
