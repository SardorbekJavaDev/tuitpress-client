import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ArticleService from '../service/article'
import walp from "../walp.jpg"
import moment from 'moment'


const ArticleCard = ({ item, getArticles }) => {
	const navigate = useNavigate()
	const { loggedIn, user } = useSelector(state => state.auth)
	console.log(item);
	const deleteArticle = async slug => {
		try {
			await ArticleService.deleteArticle(slug)
			getArticles()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='col' key={item.id}>
			<div className='card h-100 shadow-sm'>
				{/* <svg
					className='bd-placeholder-img card-img-top'
					width='100%'
					height='225'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-label='Placeholder: Thumbnail'
					preserveAspectRatio='xMidYMid slice'
					focusable='false'
				> */}
				<img className='mb-2' src={walp} alt='' />

				<div className='card-body'>
					<p className='card-text fw-bold fst-italic m-0'>{item.title} <span className='m-2 text-muted'>{moment(item.createdAt).format('DD MMM, YYYY')}</span></p>
					<hr></hr>
					<p className='card-text'>{item.description} <Link className='text-decoration-none' to={`/article/${item.slug}`}>
						more...
					</Link></p>
				</div>
				<div className='card-footer d-flex justify-content-between align-items-center'>
					<div className='btn-group'>
						<button onClick={() => navigate(`/article/${item.slug}`)} type='button' className='btn btn-sm btn-outline-success'>
							View
						</button>
						{loggedIn && user.username === item.author.username && (
							<>
								<button
									onClick={() => navigate(`/edit-article/${item.slug}`)}
									type='button'
									className='btn btn-sm btn-outline-secondary'
								>
									Edit
								</button>
								<button type='button' className='btn btn-sm btn-outline-danger' onClick={() => deleteArticle(item.slug)}>
									Delete
								</button>
							</>
						)}
					</div>
					<small className='text-muted fw-bold text-capitalize'>{item.author.username}</small>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
