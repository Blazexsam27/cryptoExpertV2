// NLPService.js
import nlp from "compromise";
import { stopWordsList } from "../staticData";

class NLPService {
  getMostFrequentNounsInArticles = (articles) => {
    const nounFreq = {};
    const stopWords = new Set(stopWordsList);

    articles.forEach((articleText) => {
      const doc = nlp(articleText);
      const nouns = [...doc.nouns().out("array")]; // Convert Proxy(array) to regular array

      nouns.forEach((noun) => {
        // Filter out stop words and non-alphabetic words
        if (!stopWords.has(noun.toLowerCase()) && noun.match(/^[a-zA-Z]+$/)) {
          nounFreq[noun] = (nounFreq[noun] || 0) + 1;
        }
      });
    });

    const sortedNouns = Object.keys(nounFreq)
      .map((noun) => ({
        text: noun,
        count: nounFreq[noun],
      }))
      .sort((a, b) => b.count - a.count);

    return sortedNouns.slice(0, 5);
  };
}

export default new NLPService();
