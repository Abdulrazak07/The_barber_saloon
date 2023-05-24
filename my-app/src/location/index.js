import styles from "./index.module.scss";
export default function Location() {
  const daysOfWeek = [
    { day: "Mon", hours: "8:00 am – 9:00 pm" },
    { day: "Tue", hours: "8:00 am – 9:00 pm" },
    { day: "Wed", hours: "8:00 am – 9:00 pm" },
    { day: "Thu", hours: "8:00 am – 9:00 pm" },
    { day: "Fri", hours: "8:00 am – 9:00 pm" },
    { day: "Sat", hours: "7:00 am – 9:00 pm" },
    { day: "Sun", hours: "7:00 am – 9:00 pm" },
  ];

  return (
    <div className={styles.locationAndTime}>
      <h1 className={styles.title}>Location</h1>
      <div className={styles.location}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.64724871859!2d80.0749303755904!3d12.866045487439724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f72c9afa690b%3A0x3c344085b7fd5860!2sThe%20barber%20saloon!5e0!3m2!1sen!2sin!4v1684521914737!5m2!1sen!2sin"
          width="1000"
          left="50"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.container}>
        <div>
          <h className={styles.addressTitle}>Address</h>
          <p classname={styles.address}>
            The barber saloon No.20, gandhinagar, <br />
            1st Street Iyancheri, East Coast Rd, <br />
            Urapakkam, Chennai, Tamil Nadu 603210
          </p>
        </div>
        <div>
          <h className={styles.timingTitle}>Timing</h>
          <div className={styles.openingHoursContainer}>
            {/* <h2 className={styles.openingHoursHeading}>Opening Hours</h2> */}
            <ul className={styles.openingHoursList}>
              {daysOfWeek.map((day) => (
                <li key={day.day} className={styles.openingHoursItem}>
                  <span className={styles.day}>{day.day}:</span>
                  <span className={styles.hours}>{day.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
