import React from "react";
import "./posts.css";
import Post from "./Post";


const Posts = () => {
const blogPosts = [
	{
	title: "Blog Design",
	body: ``,
	author: "Jacquelin Doran",
	imgUrl:
		"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
	},
	{
	title: "Web Application Structure",
	body: ``,
	author: "Jacquelin Doran",
	imgUrl:
		"https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
	},
	{
	title: "Hosting in AWS",
	body: ``,
	author: "Jacquelin Doran",
	imgUrl:
		"https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
	}
];
return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};
export default Posts;