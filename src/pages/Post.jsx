import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    console.log("FILE ID:", post?.featuredImage);
    console.log("IMAGE URL:", post && service.getFilePreview(post.featuredImage).toString());

    return post ? (
    <div className="w-full py-10">
        <Container>
            <article className="mx-auto max-w-5xl">
                {/* Featured Image */}
                <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
                    <img
                        src={service.getFilePreview(post.featuredImage).toString()}
                        alt={post.title}
                        className="max-h-550px w-full object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-5 top-5 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-green-500"
                                    className="shadow-lg hover:bg-green-400"
                                >
                                    Edit
                                </Button>
                            </Link>

                            <Button
                                bgColor="bg-red-500"
                                className="shadow-lg hover:bg-red-400"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Article Header */}
                <header className="mb-8 border-b border-white/10 pb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-400">
                        WriteHub
                    </p>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        {post.title}
                    </h1>
                </header>

                {/* Article Content */}
                <div className="browser-css max-w-none text-gray-300">
                    {parse(post.content)}
                </div>
            </article>
        </Container>
    </div>
) : null;
}