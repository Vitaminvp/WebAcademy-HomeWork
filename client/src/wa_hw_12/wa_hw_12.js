import './wa_hw_12.scss';
import './js/_base.js';
import { accordion } from './js/accordion';

const accordions  = document.querySelectorAll(".accordion");
const array = [
    [
    {title : "Collapsible item #1-1", content: "1-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #1-2", content: "1-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #1-3", content: "1-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #1-4", content: "1-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #1-5", content: "1-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."}
    ],
    [
    {title : "Collapsible item #2-1", content: "2-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-2", content: "2-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-3", content: "2-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-4", content: "2-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-5", content: "2-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-6", content: "2-6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #2-7", content: "2-7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."}
    ],
    [
    {title : "Collapsible item #3-1", content: "3-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #3-2", content: "3-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #3-3", content: "3-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #3-4", content: "3-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #3-5", content: "3-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."},
    {title : "Collapsible item #3-6", content: "3-6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates."}
    ]
    ];
for(let i = 0; i < accordions.length; i++){
    accordion(accordions[i], array[i]);
}


