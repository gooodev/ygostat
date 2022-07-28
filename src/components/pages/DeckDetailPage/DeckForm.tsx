import { DeckThemesModal } from '@/components/models/';
import { DeckByIdQuery } from '@/hooks/graphql/codegen';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';

type DeckType = NonNullable<DeckByIdQuery['decksByPk']>;

type Prpos = {
  defaultValues?: DeckType;
};

export const DeckForm = ({ defaultValues }: Prpos) => {
  const isEditForm = defaultValues != null;
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<NonNullable<DeckByIdQuery['decksByPk']>>({
    defaultValues,
  });

  const onSubmit = (data: DeckType) => {
    console.log(data);
  };
  const [isDeckThemeOpen, setDeckThemeOpen] = useState(false);

  return (
    <Flex as="form" flexDir="column" gap={3} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">デッキ名</FormLabel>
        <Input {...register('name', { required: true })} />
        {errors.name?.type === 'required' && (
          <FormErrorMessage>DeckName is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.themeId}>
        <FormLabel htmlFor="name">デッキテーマ</FormLabel>
        <Controller
          name="themeId"
          control={control}
          render={() => (
            <Button leftIcon={<FaEdit />} fontWeight="medium" w="100%">
              {watch('deckTheme.themeName')}
            </Button>
          )}
        />
        <DeckThemesModal isOpen={isDeckThemeOpen} onClose={() => setDeckThemeOpen(false)} />
        {errors.name?.type === 'required' && (
          <FormErrorMessage>DeckType is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.themeId}>
        <FormLabel htmlFor="memo">デッキメモ</FormLabel>
        <Textarea {...register('memo')} />
      </FormControl>
      <Button type="submit" bgColor="ButtonHighlight">
        {isEditForm ? '更新' : '登録'}
      </Button>
      {isEditForm && (
        <Button colorScheme="red" type="button">
          削除
        </Button>
      )}
    </Flex>
  );
};
