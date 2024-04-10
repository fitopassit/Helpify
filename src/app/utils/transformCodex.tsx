import { IArticle } from "../types/types";

export class TransformCodex {
  decodeTransform = {
    criminalCode: (string: string) => this.transformArticleCriminalCode(string),
    administrativeCode: (string: string) =>
      this.transformArticleAdministrativeCode(string),
    transformStringToArticles: (string: string) =>
      this.transformStringToArticles(string),
  };

  transformArticleCriminalCode(string: string) {
    const parsedItem = string.split("\n");

    function transformArray(arr: any[]) {
      const transformedArray = [];
      let currentObj = {} as IArticle;

      for (let i = 0; i < arr.length; i++) {
        const line = arr[i].trim();
        if (line === "") {
          // Skip empty lines
          continue;
        }

        if (line.includes("*") || line.includes("**") || line.includes("***")) {
          if (Object.keys(currentObj).length > 0) {
            transformedArray.push(currentObj);
          }

          const articleIndex = line.indexOf(" ");
          const article = line.substring(0, articleIndex);
          const titleArticle = line.substring(articleIndex + 1);
          currentObj = {
            article,
            titleArticle,
            punishment: [],
            keyword: [],
            exception: null,
            explanation: null,
            note: null,
          };
        } else if (line.startsWith("Наказание:")) {
          // Punishment line
          const punishment = line.substring(line.indexOf(":") + 1).trim();
          currentObj.punishment.push(punishment);
        } else if (line.startsWith("Исключение:")) {
          // Exception line
          const exception = line.substring(line.indexOf(":") + 1).trim();
          currentObj.exception = exception;
        } else if (line.startsWith("Объяснение:")) {
          // Explanation line
          const explanation = line.substring(line.indexOf(":") + 1).trim();
          currentObj.explanation = explanation;
        } else if (line.startsWith("Приоритет розыска")) {
          const note = line.substring(line.indexOf(":") + 1).trim();
          if (currentObj.note) {
            currentObj.note = `${note} ${currentObj.note}`;
          } else {
            currentObj.note = note;
          }
        } else if (line.startsWith("Пояснение:")) {
          const explanation = line.substring(line.indexOf(":") + 1).trim();
          currentObj.explanation = explanation;
        } else if (line.startsWith("Примечание:")) {
          // Note line
          const note = line.substring(line.indexOf(":") + 1).trim();

          if (currentObj.note) {
            currentObj.note = `${currentObj.note}. ${note}`;
          } else {
            console.log(note);
            currentObj.note = note;
          }
        }
      }

      // Push the last object into the transformed array
      transformedArray.push(currentObj);

      return transformedArray;
    }

    return transformArray(parsedItem);
  }

  transformArticleAdministrativeCode(string: string) {
    if (!string) return;
    const regex =
      /^([\d.]+)\. (.+)(?:\.\s+Пояснение: (.+))?\.\s+Наказание: (.+?)(?:\.\s+Комментарий: (.+?))?(?:\.\s+Примечание: (.+?))?$/gm;

    const objects = [];

    let match;
    while ((match = regex.exec(string)) !== null) {
      const article = match[1].trim();
      const titleArticle = match[2].trim();
      const explanation = match[3] ? match[3].trim() : null;
      const punishment = [match[4].trim()];
      const comment = match[5] ? match[5].trim() : null;
      const note = match[6] ? match[6].trim() : null;

      objects.push({
        article,
        titleArticle,
        punishment,
        keyword: [],
        exception: null,
        explanation,
        comment,
        note,
      });
    }

    return objects;
  }

  transformStringToArticles(string: string) {
    const articles = string.split("\n\n");
    const result = [];

    for (let article of articles) {
      const lines = article.split("\n");
      const [articleNumber, titleArticle] = lines[0].split(". ");

      const punishment = [];
      const keyword = [];
      let exception = null;
      let explanation = null;
      let note = null;

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith("Наказание:")) {
          punishment.push(line.slice(10));
        } else if (line.startsWith("Ключевые слова:")) {
          keyword.push(line.slice(16));
        } else if (line.startsWith("Исключение:")) {
          exception = line.slice(12);
        } else if (line.startsWith("Пояснение:")) {
          explanation = line.slice(11);
        } else if (line.startsWith("Примечание:")) {
          note = line.slice(12);
        }
      }

      result.push({
        article: articleNumber,
        titleArticle,
        punishment,
        keyword,
        exception,
        explanation,
        note,
      });
    }

    return result;
  }
}
