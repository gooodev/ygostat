import Logo from '@/assets/master_duel_logo.png';
import { data01 } from '@/data/mockPiChart';
import { useAuth } from '@/hooks';
import { routePaths } from '@/routes';
import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

/** @pakcage */
export type LandingPageProps = {};

const chartWidth = 'min(700px, 90vw)';

/** @pakcage */
export default function LandingPage(_props: LandingPageProps) {
  const hasLedgends = useBreakpointValue({ base: true, sm: false });
  const navigate = useNavigate();
  const handleClickRecordsButton = () => {
    navigate(routePaths.records);
  };
  const { login } = useAuth();
  return (
    <VStack as="main" mt={8} mx={4} pb={8} spacing={{ base: 4, sm: 8 }} divider={<StackDivider />}>
      <Image src={Logo} w="auto" maxH={100} />
      <Text as="h2" fontSize="2xl" fontWeight="medium">
        統計データ
      </Text>
      <VStack spacing={4}>
        <Text as="h3" fontSize="xl" whiteSpace="nowrap">
          テーマ別使用率
        </Text>
        <HStack>
          <Text as="h3" fontSize="lg" whiteSpace="nowrap">
            ランク帯：
          </Text>
          <Select w={200}>
            <option>全体</option>
            <option>ダイヤ</option>
            <option>プラチナ</option>
            <option>ゴールド</option>
            <option>シルバー</option>
          </Select>
        </HStack>
        <Box w={chartWidth} h={hasLedgends ? 180 : 250}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                startAngle={90}
                endAngle={-360}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                label={hasLedgends ? false : (data) => `${data.name}: ${data.value * 100}%`}
                labelLine={!hasLedgends}
                isAnimationActive={false}
              >
                {data01.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList dataKey="value" position="inside" />
              </Pie>
              {hasLedgends && (
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  width={150}
                  content={({ payload }) => {
                    return payload?.map((entry, index) => (
                      <Text
                        color={COLORS[index % COLORS.length]}
                        key={`legend-${index}`}
                        width={145}
                        whiteSpace="pre-wrap"
                        display="-webkit-box"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        sx={{
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        ■ {entry.value}
                      </Text>
                    ));
                  }}
                />
              )}
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
      <Button onClick={handleClickRecordsButton}>戦績を記録する</Button>
      <VStack spacing={4}>
        <Text as="h3" fontSize="xl" whiteSpace="nowrap">
          テーマ別勝率
        </Text>
        <HStack>
          <Text as="h3" fontSize="lg" whiteSpace="nowrap">
            デッキ：
          </Text>
          <Select w={200}>
            <option>全体</option>
            <option>ダイヤ</option>
            <option>プラチナ</option>
            <option>ゴールド</option>
            <option>シルバー</option>
          </Select>
        </HStack>
        <HStack spacing={8}>
          <VStack>
            <Text fontSize="4xl">50%</Text>
            <Text fontSize="xl">先行</Text>
          </VStack>
          <VStack>
            <Text fontSize="4xl">50%</Text>
            <Text fontSize="xl">後行</Text>
          </VStack>
        </HStack>
      </VStack>
      <Button onClick={handleClickRecordsButton}>戦績を記録する</Button>
      <Button onClick={login}>ログイン</Button>
    </VStack>
  );
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
