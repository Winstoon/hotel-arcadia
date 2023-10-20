import { useOrderDialogStore } from '../../store'
import './index.css'

interface IProps {
    visible: boolean
}

export default function OrderDialog (props: IProps) {
    const visible = useOrderDialogStore(state => state.visible)
    const setVisible = useOrderDialogStore(state => state.setVisible)
    
    const onClose = () => {
        setVisible(false)
    }

    return (
        <div className={`order-dialog ${visible ? 'show' : ''}`}>
            OrderDialog
            <div onClick={onClose}>x</div>
        </div>
    )
}
