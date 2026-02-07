'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { useRouter } from 'next/navigation'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'
import { Input } from '../ui'
import CheckboxFiltersGroup from './checkbox-filters-group'
import { RangeSlider } from './range-slider'
import Title from './title'

interface Props {
	className?: string
}

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

export const Filters = ({ className }: Props) => {
	const router = useRouter()
	const { ingredients, loading, onAddId, selectedIngredients } =
		useFilterIngredients()

	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

	const [prices, setPrice] = useState<PriceProps>({})

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value
		})
	}

	const filters = {
		...prices,
		pizzaTypes: Array.from(pizzaTypes),
		sizes: Array.from(sizes),
		ingredients: Array.from(selectedIngredients)
	}

	useEffect(() => {
		const query = qs.stringify(filters, {
			arrayFormat: 'comma'
		})

		router.push(`?${query}`)
	}, [filters])

	return (
		<div className={className}>
			<Title
				text="Фильтрация"
				size="sm"
				className="mb-5 font-bold"
			/>

			{/* Верхние чекбоксы */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={togglePizzaTypes}
				selected={pizzaTypes}
				items={[
					{
						text: 'Тонкое',
						value: '1'
					},
					{
						text: 'Традиционное',
						value: '2'
					}
				]}
			/>

			<CheckboxFiltersGroup
				title="Размеры"
				name="sizes"
				className="mb-5"
				onClickCheckbox={toggleSizes}
				selected={sizes}
				items={[
					{
						text: '20cm',
						value: '20'
					},
					{
						text: '30cm',
						value: '30'
					},
					{
						text: '40cm',
						value: '40'
					}
				]}
			/>

			{/* Фильтр цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type="number"
						min={100}
						max={1000}
						placeholder="1000"
						value={String(prices.priceTo)}
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom || 0, prices.priceTo || 1000]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
				/>
			</div>

			{/* Фильтр ингридиентов */}
			<CheckboxFiltersGroup
				title="Ингридиенты"
				className="mt-5"
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
			/>
		</div>
	)
}

export default Filters
