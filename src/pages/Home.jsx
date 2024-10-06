import { useEffect } from 'react'

export default function Home() {
	useEffect(() => document.title = 'Home', [])

	return (
		<section>
			<h1>HOME</h1>
		</section>
	)
}
