import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building,
  Users,
  Globe,
  TrendingUp,
  FileText,
  Scale,
  ShieldCheck,
  Award,
  Handshake,
  Shield,
  Truck,
  Landmark,
} from 'lucide-react';
import Image from 'next/image';

const services = [
    {
      title: 'Corporate Finance and Operational Finance Management',
      description: "Managing a company's financial strength and operational effectiveness is critical to success. Our expert corporate and operational finance consultants focus on your company's growth and sustainability goals.",
      icon: Building,
    },
    {
      title: 'Roadmap for Institutionalization in Family Businesses',
      description: 'We guide you to determine and implement the strategic steps that should be followed during the institutionalization process of family businesses.',
      icon: Users,
    },
    {
      title: 'Export, Expansion to Foreign Markets and Globalization Consultancy',
      description: "We support companies' globalization strategies by managing their export and international market expansion processes.",
      icon: Globe,
    },
    {
      title: 'Business Development and Foreign Investments',
      description: 'We offer expert consulting services on international business development, investment opportunities, and financing. We also offer solutions for financial instruments such as ECA loans.',
      icon: TrendingUp,
    },
    {
      title: 'Management Reports, Budget Management and ERP Projects Consultancy',
      description: 'We support you in creating management reports, establishing a budget unit, managing ERP projects, and providing successful SAP project consultancy.',
      icon: FileText,
    },
    {
      title: 'Profitability and Cost Management',
      description: 'We help you optimize the performance of your business with our expert consultants in profitability analysis, cost management and profitability improvement strategies.',
      icon: Scale,
    },
    {
      title: 'Institutionalization and Internal Audit in Family Businesses',
      description: 'We offer consultancy services in family businesses on issues such as preparing a family constitution, establishing an internal audit unit, and fraud control.',
      icon: ShieldCheck,
    },
    {
      title: 'Turquality and Brand Incentives',
      description: 'We guide you to benefit from support programs such as Turquality and brand incentives.',
      icon: Award,
    },
    {
      title: 'M&A (Merger and Acquisition) Consultancy and Stock Exchange Listing Process',
      description: 'We are at your service with our expert consultants in preparing companies for M&A processes, stock exchange listing processes and investor relations.',
      icon: Handshake,
    },
    {
      title: 'Export Receivables and Risk Management',
      description: 'We offer you solutions in risk management issues such as export receivables management, factoring, receivables insurance, and Exim insurance.',
      icon: Shield,
    },
    {
      title: 'Supply Chain Management and Corporate Performance Management',
      description: 'We guide you in the areas of supply chain management, corporate performance management with KPIs and risk management consultancy.',
      icon: Truck,
    },
    {
      title: 'Real Estate and Financial Restructuring',
      description: "We offer solutions tailored to your business's needs with our expert consultants in real estate consultancy and financial restructuring.",
      icon: Landmark,
    },
];

export default function InvestmentConsultingPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlfGVufDB8fHx8MTc2NTM4OTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Investment Consulting"
          fill
          className="object-cover"
          priority
          data-ai-hint="corporate meeting"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Investment Consulting
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Expert guidance to drive your company's growth and sustainability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-start gap-4">
                    <service.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground pl-12">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
