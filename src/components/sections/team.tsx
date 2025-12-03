import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    id: 'team-member-1',
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'With over 20 years of experience, Jane leads Apex with a passion for innovation and a commitment to client success.',
  },
  {
    id: 'team-member-2',
    name: 'John Smith',
    role: 'Chief Financial Officer',
    bio: 'John\'s financial acumen and strategic vision have been instrumental in driving growth for our clients and our firm.',
  },
  {
    id: 'team-member-3',
    name: 'Emily White',
    role: 'Chief Operating Officer',
    bio: 'Emily excels at optimizing operations and building high-performance teams to deliver exceptional results.',
  },
  {
    id: 'team-member-4',
    name: 'Michael Brown',
    role: 'Chief Technology Officer',
    bio: 'Michael pioneers our technology-driven solutions, ensuring our clients stay ahead in a rapidly evolving digital landscape.',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Meet Our Experts
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse team of industry veterans dedicated to your success.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.id);
            return (
              <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center pt-6">
                  <Avatar className="h-32 w-32 mb-4 border-4 border-accent">
                    {memberImage && (
                      <AvatarImage 
                        src={memberImage.imageUrl} 
                        alt={member.name}
                        data-ai-hint={memberImage.imageHint} 
                      />
                    )}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold">{member.role}</p>
                  <p className="mt-4 text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
