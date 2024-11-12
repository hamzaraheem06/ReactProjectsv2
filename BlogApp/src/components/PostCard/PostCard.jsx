import React from "react";
import databaseService from "../../appwrite/database";
import { Link } from "react-router-dom";
import { Button } from "../index";

function PostCard({ $id, featuredImage, title }) {
  const onclickHandler = () => {};

  return (
    <Link to={`/post/${$id}`}>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-52 h-72 object-cover"
            src={databaseService.getFilePreview(featuredImage)}
            alt="Featured Blog Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>A Blog about "{title}"</p>
          <div className="card-actions justify-end">
            <Button
              buttonType="btn-primary"
              children="Read more"
              onclick={onclickHandler}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
