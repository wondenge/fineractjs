

import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import FloatingRate from './FloatingRate';

/**
 * The FloatingRatePeriod model module.
 * @module model/FloatingRatePeriod
 * @version 1.0
 */
class FloatingRatePeriod {
    /**
     * Constructs a new <code>FloatingRatePeriod</code>.
     * @alias module:model/FloatingRatePeriod
     */
    constructor() { 
        
        FloatingRatePeriod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FloatingRatePeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FloatingRatePeriod} obj Optional instance to populate.
     * @return {module:model/FloatingRatePeriod} The populated <code>FloatingRatePeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FloatingRatePeriod();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = ApiClient.convertToType(data['interestRate'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = AppUser.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = AppUser.constructFromObject(data['modifiedBy']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('differentialToBaseLendingRate')) {
                obj['differentialToBaseLendingRate'] = ApiClient.convertToType(data['differentialToBaseLendingRate'], 'Boolean');
            }
            if (data.hasOwnProperty('floatingRatesId')) {
                obj['floatingRatesId'] = FloatingRate.constructFromObject(data['floatingRatesId']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
FloatingRatePeriod.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
FloatingRatePeriod.prototype['fromDate'] = undefined;

/**
 * @member {Number} interestRate
 */
FloatingRatePeriod.prototype['interestRate'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
FloatingRatePeriod.prototype['createdBy'] = undefined;

/**
 * @member {module:model/AppUser} modifiedBy
 */
FloatingRatePeriod.prototype['modifiedBy'] = undefined;

/**
 * @member {Date} createdOn
 */
FloatingRatePeriod.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
FloatingRatePeriod.prototype['modifiedOn'] = undefined;

/**
 * @member {Boolean} differentialToBaseLendingRate
 */
FloatingRatePeriod.prototype['differentialToBaseLendingRate'] = undefined;

/**
 * @member {module:model/FloatingRate} floatingRatesId
 */
FloatingRatePeriod.prototype['floatingRatesId'] = undefined;

/**
 * @member {Boolean} active
 */
FloatingRatePeriod.prototype['active'] = undefined;

/**
 * @member {Boolean} new
 */
FloatingRatePeriod.prototype['new'] = undefined;






export default FloatingRatePeriod;

