https://github.com/Xotic750/astrodate
wikidata: https://meta.wikimedia.org/wiki/Wikidata/Data_model#Dates_and_times
tzdb
	https://upload.wikimedia.org/wikipedia/commons/9/9f/Tz_map_world2009r_efeledotnet.png
	https://github.com/eggert/tz
http://qntm.org/calendar
http://www.cacr.caltech.edu/futureofutc/aas223/

solar time
	local apparent / true / sundial time
	based on apparent motion of sun
	crude

local mean / clock time
	early 1800s
	corrected by equation of time
	still solar
	still very local

standard time
	weather forecasting, steam engines, trains, telegraph
	synchronizes larger regions
	1883 general time convention (US railroads)
	1884 international meridian conference

GMT
	mean solar time on the prime meridian at royal observatory at greenwich london UK

UT / universal time
	based on rotation of earth in relation to stars / quasars
	at first, used ambiguously with GMT
	1935 proposed as more precise term than GMT
	modern continuation /successor of GMT
	variable, years & days getting longer because earth is slowing because tides
	1961-01-01 first form of UTC
		occasional steps of non-integer seconds
		seconds slightly longer than SI second
		second length periodically changed to approximate earth's rotation
		discontinuous
		composed from segments:
			linear transformations of atomic time
			discontinuities arranged smartly
		approximated UT2 (until 1972)
	leap seconds are generated by UT (astronomical)
	UT0 weird
	UT1
		principal form
		determined by:
			quasar pulses
			ICRF / international celestial reference frame
				barycenter of the solar system
			laser ranging of moon
			GPS satellite orbits
		same everywhere on earth
		proportional to rotational angle of earth wrt quasars
	UT2
		linear transformation of the BIH's atomic time
		time scale was stable and internationally synchronised
	1972-01-01 UTC
		present form
		year usually has 86,400 SI seconds
		leap seconds keep it within 0.9 seconds of UT1
		began tracking (approximating) UT1 instead of UT2
		compromise arrangement for a broadcast time scale
			navigation requires a source of Universal Time
			navigation well served by public time broadcasts

sidereal time???
	https://en.wikipedia.org/wiki/Greenwich_Sidereal_Time

ERA / Earth Rotation Angle
	determination of a measure of the Earth's angle with respect to the ICRF
	modern replacement for Greenwich Mean Sidereal Time
	allowed by observations (which?)

ET / ephemeris time
	attempt at dynamical time scale
	1948 proposed to overcome the drawbacks of irregularly fluctuating mean solar time
	1952 began
	1955 cesium atomic clocks became operational
	1956/1960 standard second
	1958 ephemeris second defined as 9192631770±20 cesium resonance cycles
	1958 cesium atomic clock calibrated by reference to ephemeris time
	1967/8 SI second redefined as 9192631770 periods of ceasium 133 radiation
	1970s superceded by TT / terrestrial time
		astronomical
		superceded ephemeris
		units of SI seconds (which is based on the ceasium atomic clock)
		but based on theoretical ideal, not any particular clock or atom
		indirectly underlies UTC via TAI
		differs from UT by delta-T, which is increasing parabolically
	1976 IAU resolved is theoretical basis is non-relativistic
	1984 astronomical almanac adopts high-precision ephemerides from NASA JPL
		T-eph
			relativistic coordinate time
			differs from Terrestrial Time only by small periodic terms with an amplitude not exceeding 2 milliseconds of time
			constant / linear offset of 0.5 sec/yr from TCB (1991)
	1984 replaced by relativistic / dynamic timescales. "difficulties were realized"
		TDT / terrestrial dynamical time
		TDB / barycentric dynamical time
	1991 IAU adopts BCT / TCB / barycentric coordinate time
	1990s
		TT / terrestrial
		GCT / TCG / geocentric coordinate time

TAI
	1955-07 Tm / AM begun by BIH / International Time Bureau
		caesium: local, compared to distant by VLF radio
		1963 renamed A3
		1969 renamed TA(BIH)
	1956-09-13 A.1 / US Naval Observatory / Atomichrom
	1958
		BIH + A.1 defined by an epoch at the beginning of 1958
		TAI synchronized with UT
			inevitably imperfect: UT2 observations off by several hundredths of a second
		Julian Date 2436204.5 (1 January 1958 00:00:00) at the corresponding UT2 instant
	1971 based on SI seconds with no leap seconds, named TAI
	1970s discovered gravitational time dilation, average of altitudes
	1977-01-01
		clocks corrected so that TAI == proper time at mean sea level (the geoid)
		TAI slowed down by ~10^-12 (clocks were mostly at high altitudes)
		EAL / Echelle Atomique Libre / Free Atomic Scale == older uncorrected scale
		epoch for TCB, TCG, TT
	based on the notional passage of proper time on Earth's geoid
	proper time is some relativistic thing that i don't understand
	basis of civic /broadcast / UTC: TAI corrected by leap seconds to avoid drift from solar
	basis of Terrestrial Time: used for astronomical calculations
	200 atomic clocks in over 50 national laboratories worldwide
	compared using GPS signals and two-way satellite time and frequency transfer
	weighted average
	these were exactly the same second:
		1972-01-01 00:00:00 UTC
		1972-01-01 00:00:10 TAI

unix time
	seconds since 1970-01-01 00:00:00 UTC
	NOT counting leap seconds
	not a linear representation of time
	not a true representation of UTC

proper time?
https://en.wikipedia.org/wiki/Dynamical_time_scale
	free-fall time?
https://en.wikipedia.org/wiki/Second#International_second

possible frontend: http://wiki.openstreetmap.org/wiki/Deploying_your_own_Slippy_Map
