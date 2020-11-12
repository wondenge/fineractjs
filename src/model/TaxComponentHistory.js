

import ApiClient from '../ApiClient';
import AppUser from './AppUser';

/**
 * The TaxComponentHistory model module.
 * @module model/TaxComponentHistory
 * @version 1.0
 */
class TaxComponentHistory {
    /**
     * Constructs a new <code>TaxComponentHistory</code>.
     * @alias module:model/TaxComponentHistory
     */
    constructor() { 
        
        TaxComponentHistory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxComponentHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxComponentHistory} obj Optional instance to populate.
     * @return {module:model/TaxComponentHistory} The populated <code>TaxComponentHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxComponentHistory();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = AppUser.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedBy')) {
                obj['lastModifiedBy'] = AppUser.constructFromObject(data['lastModifiedBy']);
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
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
TaxComponentHistory.prototype['id'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
TaxComponentHistory.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
TaxComponentHistory.prototype['createdDate'] = undefined;

/**
 * @member {module:model/AppUser} lastModifiedBy
 */
TaxComponentHistory.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
TaxComponentHistory.prototype['lastModifiedDate'] = undefined;

/**
 * @member {Number} percentage
 */
TaxComponentHistory.prototype['percentage'] = undefined;

/**
 * @member {Boolean} new
 */
TaxComponentHistory.prototype['new'] = undefined;






export default TaxComponentHistory;

