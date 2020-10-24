import React, { useState } from "react";

const Shorten = () => {
	const [link, setLink] = useState("");
	const [linkInfo, setLinkInfo] = useState(null);
	const [status, setStatus] = useState(null);

	const shortenURL = (e) => {
		e.preventDefault();

		if (!link) {
			setStatus({ error: true, info: "Please provide your Link!" });
			return;
		}

		const providedLink = link;
		setLink("");
		setStatus("Loading");

		fetch(`https://api.shrtco.de/v2/shorten?url=${providedLink}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.ok) {
					setLinkInfo(data);
					setStatus(null);
				} else
					setStatus({
						error: true,
						info: "Please add a valid link!",
					});
			})
			.catch((err) => {
				setStatus({ error: true, info: "Unknown Error Occured!" });
			});
	};

	return (
		<div className='shorten'>
			<form className='shorten__box'>
				<input
					onChange={(e) => setLink(e.target.value)}
					className='shorten__inp'
					type='text'
					name='url'
					placeholder='Shorten a link here...'
					value={link}
				/>
				<button
					disabled={status === "Loading"}
					type='submit'
					onClick={shortenURL}
					className='action__btn'
				>
					Shorten it!
				</button>
			</form>
			{linkInfo && <Shortened linkInfo={linkInfo} />}

			{status === "Loading" && (
				<div className='loading'>
					<span>Just a moment...</span>
				</div>
			)}

			{status?.error && (
				<div className='error'>
					{status.info} <span onClick={() => setStatus(null)}>&times;</span>
				</div>
			)}
		</div>
	);
};

const Shortened = ({ linkInfo }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		try {
			navigator.clipboard
				.writeText(linkInfo.result.full_short_link)
				.then(setCopied(true))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='shortened'>
			<div className='base__url'>
				<h4>{linkInfo.result.original_link}</h4>
			</div>
			<div className='shortened__rslt'>
				<h4 id='rslt__url' className='rslt__url'>
					{linkInfo.result.full_short_link}
				</h4>
				{navigator.clipboard !== undefined && (
					<button
						disabled={copied}
						onClick={handleCopy}
						className={`action__btn copy ${copied && "copied"}`}
					>
						{copied ? "Copied!" : "Copy"}
					</button>
				)}
			</div>
		</div>
	);
};

export default Shorten;
