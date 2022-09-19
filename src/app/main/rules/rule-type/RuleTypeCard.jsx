import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';

function CourseCard({ ruleType, className }) {
  return (
    <Card className="flex flex-col h-200 shadow">
      <CardContent className="flex flex-auto p-18 justify-center gap-16">
        <div className="self-center">
          <Image
            src={`/${ruleType.icon}`}
            width={96}
            height={96}
            alt={ruleType.title}
          />
        </div>
        <div className={clsx('w-full', 'flex-col', 'self-center', className)}>
          <Typography className="text-16 font-medium">
            {ruleType.title}
          </Typography>

          <Typography
            className="text-13 mt-2 line-clamp-2"
            color="text.secondary"
          >
            {ruleType.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        className="items-center justify-end py-16 px-24"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.03),
        }}
      >
        <Button
          className="px-16 min-w-128"
          color="secondary"
          variant="contained"
          endIcon={
            <FuseSvgIcon className="" size={20}>
              heroicons-solid:arrow-sm-right
            </FuseSvgIcon>
          }
        >
          Continue
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
