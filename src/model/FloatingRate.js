

import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import FloatingRatePeriod from './FloatingRatePeriod';

/**
 * The FloatingRate model module.
 * @module model/FloatingRate
 * @version 1.0
 */
class FloatingRate {
    /**
     * Constructs a new <code>FloatingRate</code>.
     * @alias module:model/FloatingRate
     */
    constructor() { 
        
        FloatingRate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FloatingRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FloatingRate} obj Optional instance to populate.
     * @return {module:model/FloatingRate} The populated <code>FloatingRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FloatingRate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('floatingRatePeriods')) {
                obj['floatingRatePeriods'] = ApiClient.convertToType(data['floatingRatePeriods'], [FloatingRatePeriod]);
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
            if (data.hasOwnProperty('baseLendingRate')) {
                obj['baseLendingRate'] = ApiClient.convertToType(data['baseLendingRate'], 'Boolean');
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
FloatingRate.prototype['id'] = undefined;

/**
 * @member {String} name
 */
FloatingRate.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/FloatingRatePeriod>} floatingRatePeriods
 */
FloatingRate.prototype['floatingRatePeriods'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
FloatingRate.prototype['createdBy'] = undefined;

/**
 * @member {module:model/AppUser} modifiedBy
 */
FloatingRate.prototype['modifiedBy'] = undefined;

/**
 * @member {Date} createdOn
 */
FloatingRate.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
FloatingRate.prototype['modifiedOn'] = undefined;

/**
 * @member {Boolean} baseLendingRate
 */
FloatingRate.prototype['baseLendingRate'] = undefined;

/**
 * @member {Boolean} active
 */
FloatingRate.prototype['active'] = undefined;

/**
 * @member {Boolean} new
 */
FloatingRate.prototype['new'] = undefined;






export default FloatingRate;

