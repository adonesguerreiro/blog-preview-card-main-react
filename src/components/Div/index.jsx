import "./style.css";
import avatar from "../../assets/images/image-avatar.webp";

export default function Div() {
	return (
		<>
			<div className="content">
				<div className="category">
					<span>Learning</span>
				</div>
				<p>Published 21 Dec 2023</p>
				<h1>HTML & CSS foundations</h1>
				<p id="description">
					These languages are the backbone of every website, defining structure,
					content, and presentation.
				</p>
			</div>
			<div className="image-avatar">
				<img
					src={avatar}
					alt="avatar"
				/>
				<h4>Greg Hooper</h4>
			</div>
		</>
	);
}
