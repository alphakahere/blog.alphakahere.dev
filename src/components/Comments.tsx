"use client";
import { Comment, CommentFormData } from "@/lib/type";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "@/lib/client";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { formatDate } from "@/lib/utils";

function CommentForm({
	postId,
	fetchComments,
}: {
	postId: string;
	fetchComments: () => void;
}) {
	const validationSchema = yup.object().shape({
		name: yup.string().required("Ce champ est obligatoire"),
		message: yup.string().required("Ce champ est obligatoire"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		setValue,
	} = useForm<CommentFormData>({
		resolver: yupResolver(validationSchema),
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const userName = window.localStorage.getItem("userName");
			if (userName) setValue("name", userName);
		}
	}, [setValue]);

	const onSubmit = async (data: CommentFormData) => {
		const { remember_me, ...rest } = data;
		if (remember_me) {
			window.localStorage.setItem("userName", rest.name);
		}
		const doc = {
			_type: "comment",
			_id: uuidv4(),
			...rest,
			post: { _type: "reference", _ref: postId },
		};
		try {
			setIsSubmitting(true);
			await client.create(doc);
			toast.success("Envoyé avec succès !");
			fetchComments();
			setValue("message", "");
		} catch (error) {
			console.error("Error submitting comment:", error);
			toast.error("Une erreur a survenue lors de la soumission !");
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (errors) {
			setTimeout(
				() =>
					Object.entries(errors).map(([key]: any) =>
						clearErrors(key)
					),
				3000
			);
		}
	}, [clearErrors, errors]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-5">
				<input
					type="text"
					placeholder="Votre nom"
					className={`w-full py-2 px-3 rounded-lg border focus:outline-none
                     ${errors?.name?.message ? "border-red-500" : ""}`}
					{...register("name")}
				/>
			</div>
			<div className="">
				<textarea
					placeholder="Commentaire"
					className={`w-full py-2 px-3 rounded-lg  min-h-[80px] max-h-[80px] border focus:outline-none ${
						errors?.message ? "border-red-500" : ""
					}`}
					{...register("message")}
				/>
			</div>
			<div className="mb-5">
				<label htmlFor="remember_me">
					<input
						type="checkbox"
						className={`mr-2`}
						id="remember_me"
						{...register("remember_me")}
					/>
					Se souvenir de moi
				</label>
			</div>
			<div className="flex justify-end">
				<button
					className="button"
					type="submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? "En cours..." : "Commenter"}
				</button>
			</div>
		</form>
	);
}

const Comments = (props: {
	postId: string;
	comments: Comment[];
	fetchComments: () => void;
}) => {
	const { postId, comments, fetchComments } = props;
	useEffect(() => {
		fetchComments();
	}, []);
	return (
		<section className="dark:border-gray-900 pt-8 mb-10 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg">
			<h3 className="text-2xl mb-3 font-medium">Commentaires</h3>
			<CommentForm postId={postId} fetchComments={fetchComments} />
			<div className="">
				{comments.map((item) => (
					<div key={item._id} className="mb-3">
						<div className="flex items-center gap-2">
							<h5 className="text-blue-500 font-medium text-base">
								{item.name}
							</h5>
							<p className="text-gray-600 dark:text-gray-300 text-sm">
								le{" "}
								{formatDate(item?._createdAt)}
							</p>
						</div>
						<p className="pl-1 text-gray-600  dark:text-gray-300">
							{item.message}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Comments;
