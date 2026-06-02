import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Metadata } from 'next';
import RecordedClassesTabs from '@/components/RecordedClassesTabs';

export const metadata: Metadata = {
  title: 'Recorded Classes | Arabic - Qutoof Academy',
  description: 'Recorded Arabic classes available to watch on demand.',
  alternates: { canonical: 'https://arabic.qutoofacademy.com/classes' },
};

const mulhaUrls: string[] = [
  'https://www.youtube.com/watch?v=Cho800ZSykI',
  'https://www.youtube.com/watch?v=oHT1l66chNY',
  'https://www.youtube.com/watch?v=uvvsPzFb7gQ',
  'https://www.youtube.com/watch?v=bTHbfiF9i_s',
  'https://www.youtube.com/watch?v=YtivIYs6wUI',
  'https://www.youtube.com/watch?v=V8jZDIbURdI',
  'https://www.youtube.com/watch?v=v_7ol0uQhvo',
  'https://www.youtube.com/watch?v=2DK9hyFfmJ0',
  'https://www.youtube.com/watch?v=XTBmf7t_m4I',
  'https://www.youtube.com/watch?v=DRXsMN0-Rdg',
  'https://www.youtube.com/watch?v=XTmc0rozsCE',
  'https://www.youtube.com/watch?v=Mk6hj-q9WZA',
  'https://www.youtube.com/watch?v=zob6S6ofQrc',
  'https://www.youtube.com/watch?v=746TkXoZxv8',
  'https://www.youtube.com/watch?v=bht9c_pJlUM',
  'https://www.youtube.com/watch?v=g70p07hqboE',
  'https://www.youtube.com/watch?v=0gd-lKChUqA',
  'https://www.youtube.com/watch?v=PePl1hFNNTU',
  'https://www.youtube.com/watch?v=O9GnW_n3F-c',
  'https://www.youtube.com/watch?v=Cu7wQ6Bjo5g',
  'https://www.youtube.com/watch?v=inoAONXbGdQ',
  'https://www.youtube.com/watch?v=l5H_wLE7jh4',
  'https://www.youtube.com/watch?v=oJprOLd36vM',
  'https://www.youtube.com/watch?v=syK46NHbv-w',
  'https://www.youtube.com/watch?v=iauwVg8tt5k',
  'https://www.youtube.com/watch?v=a8-PmDra_T4',
  'https://www.youtube.com/watch?v=WCWE7N_nfm4',
  'https://www.youtube.com/watch?v=aB_ccMidmV8',
  'https://www.youtube.com/watch?v=Qhv-FL53qcI',
  'https://www.youtube.com/watch?v=LOJktzKyrQ0',
  'https://www.youtube.com/watch?v=E2buJOuIdns',
  'https://www.youtube.com/watch?v=fhXngI2OvvY',
  'https://www.youtube.com/watch?v=vG33tSejQvk',
  'https://www.youtube.com/watch?v=EatRRZncIQs',
  'https://www.youtube.com/watch?v=Mp3vosn6zf8',
  'https://www.youtube.com/watch?v=oc8oKtrZpC4',
  'https://www.youtube.com/watch?v=ZbTH1r6k-A0',
  'https://www.youtube.com/watch?v=CsIzYWl2Zno',
  'https://www.youtube.com/watch?v=SFg7Dpx3wXU',
  'https://www.youtube.com/watch?v=yhxCJUElOSI',
  'https://www.youtube.com/watch?v=Z9SBqgoqRIQ',
  'https://www.youtube.com/watch?v=KLV6l0N7QGw',
  'https://www.youtube.com/watch?v=rWYb8r4y48E',
  'https://www.youtube.com/watch?v=HT1sheQ11ps',
  'https://www.youtube.com/watch?v=8oazocV07AA',
  'https://www.youtube.com/watch?v=q4rhA2KcR2A',
  'https://www.youtube.com/watch?v=mlgMTqwQVvE',
  'https://www.youtube.com/watch?v=wcESW6xbzM8',
  'https://www.youtube.com/watch?v=U9qk_q8t4mk',
  'https://www.youtube.com/watch?v=aontR6SNvzg',
];

const quranicGrammarUrls: string[] = [
  'https://www.youtube.com/watch?v=ld826pEcVhM',
  'https://www.youtube.com/watch?v=mwJ8C5CoijY',
  'https://www.youtube.com/watch?v=bjuziBcbrOk',
  'https://www.youtube.com/watch?v=z1YGpriRlqI',
  'https://www.youtube.com/watch?v=dz2_nqQ5lY0',
  'https://www.youtube.com/watch?v=nay6L4fUAkg',
  'https://www.youtube.com/watch?v=-cA8aH2_MUA',
  'https://www.youtube.com/watch?v=Nm4vm7gglqw',
  'https://www.youtube.com/watch?v=YoTUp7N2JmI',
  'https://www.youtube.com/watch?v=vcJu0IL93AE',
  'https://www.youtube.com/watch?v=vTKO7DDUyz0',
  'https://www.youtube.com/watch?v=56a7_DH6zpI',
  'https://www.youtube.com/watch?v=T3J6JArg0xk',
  'https://www.youtube.com/watch?v=h9azDTRqoVU',
  'https://www.youtube.com/watch?v=A9-5CY4kk_g',
  'https://www.youtube.com/watch?v=Op0K-tRFjbU',
  'https://www.youtube.com/watch?v=OpJFzgkVpFo',
  'https://www.youtube.com/watch?v=rQ3SlSN6TMM',
  'https://www.youtube.com/watch?v=WCsB8sJGtX8',
  'https://www.youtube.com/watch?v=fWFTluqTmM4',
];

const courses = [
  { id: 'mulha', name: 'Mulha', urls: mulhaUrls },
  { id: 'quranic-grammar', name: 'Quranic Grammar', urls: quranicGrammarUrls },
];

export default function ClassesPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-12">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl font-semibold text-slate-900">
              Recorded Classes
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Choose a course to view recorded sessions.
            </p>

            <div className="mt-6">
              <RecordedClassesTabs courses={courses} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
