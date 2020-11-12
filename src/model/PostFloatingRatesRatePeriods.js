

import ApiClient from '../ApiClient';

/**
 * The PostFloatingRatesRatePeriods model module.
 * @module model/PostFloatingRatesRatePeriods
 * @version 1.0
 */
class PostFloatingRatesRatePeriods {
    /**
     * Constructs a new <code>PostFloatingRatesRatePeriods</code>.
     * @alias module:model/PostFloatingRatesRatePeriods
     */
    constructor() { 
        
        PostFloatingRatesRatePeriods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFloatingRatesRatePeriods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFloatingRatesRatePeriods} obj Optional instance to populate.
     * @return {module:model/PostFloatingRatesRatePeriods} The populated <code>PostFloatingRatesRatePeriods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFloatingRatesRatePeriods();

            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = ApiClient.convertToType(data['interestRate'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fromDate
 */
PostFloatingRatesRatePeriods.prototype['fromDate'] = undefined;

/**
 * @member {Number} interestRate
 */
PostFloatingRatesRatePeriods.prototype['interestRate'] = undefined;

/**
 * @member {String} locale
 */
PostFloatingRatesRatePeriods.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostFloatingRatesRatePeriods.prototype['dateFormat'] = undefined;






export default PostFloatingRatesRatePeriods;

