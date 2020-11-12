

import ApiClient from '../ApiClient';

/**
 * The ChargeFeeOnMonthDay model module.
 * @module model/ChargeFeeOnMonthDay
 * @version 1.0
 */
class ChargeFeeOnMonthDay {
    /**
     * Constructs a new <code>ChargeFeeOnMonthDay</code>.
     * @alias module:model/ChargeFeeOnMonthDay
     */
    constructor() { 
        
        ChargeFeeOnMonthDay.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChargeFeeOnMonthDay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargeFeeOnMonthDay} obj Optional instance to populate.
     * @return {module:model/ChargeFeeOnMonthDay} The populated <code>ChargeFeeOnMonthDay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeFeeOnMonthDay();

            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'String');
            }
            if (data.hasOwnProperty('monthValue')) {
                obj['monthValue'] = ApiClient.convertToType(data['monthValue'], 'Number');
            }
            if (data.hasOwnProperty('dayOfMonth')) {
                obj['dayOfMonth'] = ApiClient.convertToType(data['dayOfMonth'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ChargeFeeOnMonthDay.MonthEnum} month
 */
ChargeFeeOnMonthDay.prototype['month'] = undefined;

/**
 * @member {Number} monthValue
 */
ChargeFeeOnMonthDay.prototype['monthValue'] = undefined;

/**
 * @member {Number} dayOfMonth
 */
ChargeFeeOnMonthDay.prototype['dayOfMonth'] = undefined;





/**
 * Allowed values for the <code>month</code> property.
 * @enum {String}
 * @readonly
 */
ChargeFeeOnMonthDay['MonthEnum'] = {

    /**
     * value: "JANUARY"
     * @const
     */
    "JANUARY": "JANUARY",

    /**
     * value: "FEBRUARY"
     * @const
     */
    "FEBRUARY": "FEBRUARY",

    /**
     * value: "MARCH"
     * @const
     */
    "MARCH": "MARCH",

    /**
     * value: "APRIL"
     * @const
     */
    "APRIL": "APRIL",

    /**
     * value: "MAY"
     * @const
     */
    "MAY": "MAY",

    /**
     * value: "JUNE"
     * @const
     */
    "JUNE": "JUNE",

    /**
     * value: "JULY"
     * @const
     */
    "JULY": "JULY",

    /**
     * value: "AUGUST"
     * @const
     */
    "AUGUST": "AUGUST",

    /**
     * value: "SEPTEMBER"
     * @const
     */
    "SEPTEMBER": "SEPTEMBER",

    /**
     * value: "OCTOBER"
     * @const
     */
    "OCTOBER": "OCTOBER",

    /**
     * value: "NOVEMBER"
     * @const
     */
    "NOVEMBER": "NOVEMBER",

    /**
     * value: "DECEMBER"
     * @const
     */
    "DECEMBER": "DECEMBER"
};



export default ChargeFeeOnMonthDay;

