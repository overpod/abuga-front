import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react';
import NextImage from 'next/image';

import {
  SearchTvSeriesDocument,
  SearchTvSeriesQuery,
  SearchTvSeriesQueryVariables,
  apiClient,
} from '@/api';

export default async function Home() {
  const { data } = await apiClient.query<
    SearchTvSeriesQuery,
    SearchTvSeriesQueryVariables
  >(SearchTvSeriesDocument, {
    input: {
      perPage: 48,
    },
  });

  const items = data?.searchTvSeries.items || [];

  const listItems = items.map((item) => (
    <Card key={item.id} className="shadow-2xl">
      <Image
        alt={item.name || 'No name'}
        className="z-0 w-full h-full object-cover"
        removeWrapper
        src={`${process.env.NEXT_PUBLIC_API_URL}/image/t/p/w500${item.posterPath}`}
        height={200}
      />
      <CardFooter>
        <h4 className="font-bold text-large">{item.name}</h4>
      </CardFooter>
    </Card>
  ));

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grid grid-cols-4 gap-6">{listItems}</div>
    </section>
  );
}
