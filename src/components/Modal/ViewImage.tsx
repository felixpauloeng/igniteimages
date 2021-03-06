import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return( 
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay/>

        <ModalContent bgColor='pGray.700' maxW={900} maxH={600}>
            <Image src={imgUrl}  />
          <ModalFooter bgColor='pGray.700' justifyContent="flex-start">
            <Link href={imgUrl} target="_blank">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
