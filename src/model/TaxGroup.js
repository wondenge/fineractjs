

import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import TaxGroupMappings from './TaxGroupMappings';

/**
 * The TaxGroup model module.
 * @module model/TaxGroup
 * @version 1.0
 */
class TaxGroup {
    /**
     * Constructs a new <code>TaxGroup</code>.
     * @alias module:model/TaxGroup
     */
    constructor() { 
        
        TaxGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxGroup} obj Optional instance to populate.
     * @return {module:model/TaxGroup} The populated <code>TaxGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxGroup();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('taxGroupMappings')) {
                obj['taxGroupMappings'] = ApiClient.convertToType(data['taxGroupMappings'], [TaxGroupMappings]);
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
TaxGroup.prototype['id'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
TaxGroup.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
TaxGroup.prototype['createdDate'] = undefined;

/**
 * @member {module:model/AppUser} lastModifiedBy
 */
TaxGroup.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
TaxGroup.prototype['lastModifiedDate'] = undefined;

/**
 * @member {String} name
 */
TaxGroup.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/TaxGroupMappings>} taxGroupMappings
 */
TaxGroup.prototype['taxGroupMappings'] = undefined;

/**
 * @member {Boolean} new
 */
TaxGroup.prototype['new'] = undefined;






export default TaxGroup;

