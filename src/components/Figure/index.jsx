import illustrationarticle from "../../assets/images/illustration-article.svg";
import "./style.css";

export default function Figure() {
	return (
		<figure>
			<img
				src={illustrationarticle}
				alt="illustration-article"
			/>
		</figure>
	);
}
