import { Container, Filters, Title, TopBar } from '@/components/shared'
import ProductsGroupList from '@/components/shared/products-group-list'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title
					text="Все пиццы"
					size="lg"
					className="font-extrabold"
				></Title>
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* Список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Пицца"
								categoryId={1}
								items={[
									{
										id: 1,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 2,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 3,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 4,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 5,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									}
								]}
							/>
							<ProductsGroupList
								title="Комбо"
								categoryId={2}
								items={[
									{
										id: 1,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 2,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 3,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 4,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									},
									{
										id: 5,
										name: 'Бургер-пицца',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
										price: 550,
										items: [
											{
												price: 550
											}
										]
									}
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
