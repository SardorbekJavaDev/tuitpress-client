import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import ArticleForm from './article-form'

const CreateArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const formSubmit = async e => {
		e.preventDefault()
		const article = { title, description, body }
		dispatch(postArticleStart())
		try {
			await ArticleService.postArticle(article)
			dispatch(postArticleSuccess())
			navigate('/')
		} catch (error) {
			dispatch(postArticleFailure())
		}
	}

	const formProps = {
		title, setTitle,
		description, setDescription,
		body, setBody,
		formSubmit
	}



	// chechbox
	const [isEnableTg, setIsEnableTg] = useState(false);
	const [isEnableWeb, setIsEnableWeb] = useState(false);
	const [isEnableIn, setIsEnableIn] = useState(false);
	const [isEnableInstag, setIsEnableInstag] = useState(false);

	const handleChange1 = event => {
		setIsEnableTg(current => !current);
	};
	const handleChange2 = event => {
		setIsEnableWeb(current => !current);
	};
	const handleChange4 = event => {
		setIsEnableIn(current => !current);
	};
	const handleChange3 = event => {
		setIsEnableInstag(current => !current);
	};


	return (
		<div className='text-center'>
			<h1 className='fs-2'>Create article</h1>
			<div className="btn-group mb-3 w-25" role="group" aria-label="Basic checkbox toggle button group">
				<input type="checkbox"
					value={isEnableTg} onChange={handleChange1}
					className="btn-check" id="btncheck1" autocomplete="off" />
				<label className="btn btn-outline-primary" for="btncheck1">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
					</svg>
				</label>

				<input type="checkbox"
					value={isEnableWeb} onChange={handleChange2}
					className="btn-check" id="btncheck2" autocomplete="off" />
				<label className="btn btn-outline-primary" for="btncheck2">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-browser-chrome" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
					</svg>
				</label>

				<input type="checkbox"
					value={isEnableInstag} onChange={handleChange3}
					className="btn-check" id="btncheck3" autocomplete="off" />
				<label className="btn btn-outline-primary" for="btncheck3">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
						<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
					</svg>
				</label>

				<input type="checkbox"
					value={isEnableIn} onChange={handleChange4}
					className="btn-check" id="btncheck4" autocomplete="off" />
				<label className="btn btn-outline-primary" for="btncheck4">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
						<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
					</svg>
				</label>

				<br />

			</div>
			<div className='w-75 mx-auto'>
				{isEnableTg && (
					<h2>Select you Telegram channels ✅</h2>
				)}

				{isEnableInstag && (
					<h2>Select you Instagram profile ✅</h2>
				)}

				{isEnableIn && (
					<h2>Select you LinkedIn channels ✅</h2>
				)}

				{isEnableWeb && (
					<h2>Select you article blog ✅</h2>
				)}
			</div>
			<div className='w-75 mx-auto'>
				<ArticleForm {...formProps} />
			</div>
		</div>
	)
}

export default CreateArticle