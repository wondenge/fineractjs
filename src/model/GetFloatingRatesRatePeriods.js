  

import ApiClient from '../ApiClient';

/**
 * The GetFloatingRatesRatePeriods model module.
 * @module model/GetFloatingRatesRatePeriods
 * @version 1.0
 */
class GetFloatingRatesRatePeriods {
    /**
     * Constructs a new <code>GetFloatingRatesRatePeriods</code>.
     * @alias module:model/GetFloatingRatesRatePeriods
     */
    constructor() { 
        
        GetFloatingRatesRatePeriods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFloatingRatesRatePeriods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFloatingRatesRatePeriods} obj Optional instance to populate.
     * @return {module:model/GetFloatingRatesRatePeriods} The populated <code>GetFloatingRatesRatePeriods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFloatingRatesRatePeriods();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = ApiClient.convertToType(data['interestRate'], 'Number');
            }
            if (data.hasOwnProperty('isDifferentialToBaseLendingRate')) {
                obj['isDifferentialToBaseLendingRate'] = ApiClient.convertToType(data['isDifferentialToBaseLendingRate'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFloatingRatesRatePeriods.prototype['id'] = undefined;

/**
 * @member {String} fromDate
 */
GetFloatingRatesRatePeriods.prototype['fromDate'] = undefined;

/**
 * @member {Number} interestRate
 */
GetFloatingRatesRatePeriods.prototype['interestRate'] = undefined;

/**
 * @member {Boolean} isDifferentialToBaseLendingRate
 */
GetFloatingRatesRatePeriods.prototype['isDifferentialToBaseLendingRate'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetFloatingRatesRatePeriods.prototype['isActive'] = undefined;

/**
 * @member {String} createdBy
 */
GetFloatingRatesRatePeriods.prototype['createdBy'] = undefined;

/**
 * @member {String} createdOn
 */
GetFloatingRatesRatePeriods.prototype['createdOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
GetFloatingRatesRatePeriods.prototype['modifiedBy'] = undefined;

/**
 * @member {String} modifiedOn
 */
GetFloatingRatesRatePeriods.prototype['modifiedOn'] = undefined;






export default GetFloatingRatesRatePeriods;

