import { useCallback } from 'preact/hooks'
import { Analytics } from '../../Analytics.js'
import type { ColormapType } from '../../previews/Colormap.js'
import { ColormapTypes } from '../../previews/Colormap.js'
import { Store } from '../../Store.js'
import { Btn } from '../Btn.jsx'
import { BtnMenu } from '../BtnMenu.jsx'

interface Props {
	value: ColormapType,
	onChange: (value: ColormapType) => void,
}
export function ColormapSelector({ value, onChange }: Props) {
	const doChange = useCallback((type: ColormapType) => {
		Analytics.setColormap(type)
		Store.setColormap(type)
		onChange(type)
	}, [onChange])

	return <BtnMenu icon="flame">
		{ColormapTypes.map(type => <Btn label={type} onClick={() => doChange(type)} active={value === type} />)}
	</BtnMenu>
}
