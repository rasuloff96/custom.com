"use client"
import { useState, useEffect } from "react"
import { Dialog } from "@headlessui/react"
import { useParams, useRouter } from "next/navigation"
import { ProductType } from "@/interfaces"


const AccessPage = () => {
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const [product, setProduct] = useState<ProductType>()

    const { id } = useParams()
    const router = useRouter()

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const res = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            const product = await res.json();
            setProduct(product);
            setLoading(false);
        }

        getData();
    }, [id]);

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                setIsOpen(false)
                router.back()
            }}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className={"mx-auto max-w-3xl rounded bg-white p-10"}>
                        {loading ? (
                            <div className='h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin' />
                        ) : (
                            <div>
                                <form>
                                    <input type="text" placeholder="Name" />
                                </form>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default AccessPage