// Sometimes data can contain nested or child content.

type CardData = {
  title: string;
  content: string;
};

const renderCard = (data: CardData): string => {
  return `${data.title}: ${data.content}`;
};

console.log(
  renderCard({
    title: "Typescript",
    content: "Learning Typescript",
  }),
);

// Flexible child-like content

type Content = string | number;

const showContent = (content: Content): void => {
  console.log(content);
};

showContent("Hello Typescript");
showContent(100);
