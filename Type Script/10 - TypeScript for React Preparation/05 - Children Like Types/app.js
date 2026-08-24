"use strict";
// Sometimes data can contain nested or child content.
const renderCard = (data) => {
    return `${data.title}: ${data.content}`;
};
console.log(renderCard({
    title: "Typescript",
    content: "Learning Typescript",
}));
const showContent = (content) => {
    console.log(content);
};
showContent("Hello Typescript");
showContent(100);
