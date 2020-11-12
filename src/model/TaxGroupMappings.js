import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import TaxComponent from './TaxComponent';

/**
 * The TaxGroupMappings model module.
 * @module model/TaxGroupMappings
 * @version 1.0
 */
class TaxGroupMappings {
    /**
     * Constructs a new <code>TaxGroupMappings</code>.
     * @alias module:model/TaxGroupMappings
     */
    constructor() {

        TaxGroupMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>TaxGroupMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxGroupMappings} obj Optional instance to populate.
     * @return {module:model/TaxGroupMappings} The populated <code>TaxGroupMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxGroupMappings();

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
            if (data.hasOwnProperty('taxComponent')) {
                obj['taxComponent'] = TaxComponent.constructFromObject(data['taxComponent']);
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
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
TaxGroupMappings.prototype['id'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
TaxGroupMappings.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
TaxGroupMappings.prototype['createdDate'] = undefined;

/**
 * @member {module:model/AppUser} lastModifiedBy
 */
TaxGroupMappings.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
TaxGroupMappings.prototype['lastModifiedDate'] = undefined;

/**
 * @member {module:model/TaxComponent} taxComponent
 */
TaxGroupMappings.prototype['taxComponent'] = undefined;

/**
 * @member {Date} endDate
 */
TaxGroupMappings.prototype['endDate'] = undefined;

/**
 * @member {Boolean} new
 */
TaxGroupMappings.prototype['new'] = undefined;


export default TaxGroupMappings;

