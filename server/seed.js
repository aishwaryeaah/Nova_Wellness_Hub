import mongoose from "mongoose";
import Article from '../models/Article.js';
import Domain from '../models/Domain.js';


const domainData = [
  { name: "User WOMEN’S MENSTRUAL HEALTH" },
  { name: "User EMOTIONAL INTELLIGENCE AND RESILIENCE" },
  { name: "User WELLNESS" },
  { name: "User Women-related Cancers" },
  { name: "User Sexual Health" },
  { name: "User Mental Health" },
];

const articleData = [
  { title: "Article 1", content: "Content for article 1", domainName: "User WOMEN’S MENSTRUAL HEALTH" },
  { title: "Article 2", content: "Content for article 2", domainName: "User WOMEN’S MENSTRUAL HEALTH" },
  { title: "Article 3", content: "Content for article 3", domainName: "User EMOTIONAL INTELLIGENCE AND RESILIENCE" },
  { title: "Article 4", content: "Content for article 4", domainName: "User EMOTIONAL INTELLIGENCE AND RESILIENCE" },
  { title: "Article 5", content: "Content for article 5", domainName: "User WELLNESS" },
  { title: "Article 6", content: "Content for article 6", domainName: "User WELLNESS" },
  { title: "Article 7", content: "Content for article 7", domainName: "User Women-related Cancers" },
  { title: "Article 8", content: "Content for article 8", domainName: "User Women-related Cancers" },
  { title: "Article 9", content: "Content for article 9", domainName: "User Sexual Health" },
  { title: "Article 10", content: "Content for article 10", domainName: "User Sexual Health" },
  { title: "Article 11", content: "Content for article 11", domainName: "User Mental Health" },
  { title: "Article 12", content: "Content for article 12", domainName: "User Mental Health" },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    // Clear DB
    await Domain.deleteMany();
    await Article.deleteMany();

    // Insert Domains
    const createdDomains = await Domain.insertMany(domainData);
    console.log('Domains seeded:', createdDomains);

    // Insert Articles
    const articles = articleData.map((article) => {
      const domain = createdDomains.find((domain) => domain.name === article.domainName);
      article.domain = domain._id;
      return article;
    });
    const createdArticles = await Article.insertMany(articles);
    console.log('Articles seeded:', createdArticles);

    process.exit();
  } catch (error) {
    console.error('Error seeding:', error.message);
    process.exit(1);
  }
};

seed();
