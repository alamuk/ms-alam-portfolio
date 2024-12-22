import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { gridItems } from '../../data/intex';

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            },
            i,
          ) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
}
