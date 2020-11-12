

import ApiClient from '../ApiClient';
import AppUser from './AppUser';
import GLAccount from './GLAccount';
import TaxComponentHistory from './TaxComponentHistory';
import TaxGroupMappings from './TaxGroupMappings';

/**
 * The TaxComponent model module.
 * @module model/TaxComponent
 * @version 1.0
 */
class TaxComponent {
    /**
     * Constructs a new <code>TaxComponent</code>.
     * @alias module:model/TaxComponent
     */
    constructor() { 
        
        TaxComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaxComponent} obj Optional instance to populate.
     * @return {module:model/TaxComponent} The populated <code>TaxComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxComponent();

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
            if (data.hasOwnProperty('debitAccountType')) {
                obj['debitAccountType'] = ApiClient.convertToType(data['debitAccountType'], 'Number');
            }
            if (data.hasOwnProperty('debitAcount')) {
                obj['debitAcount'] = GLAccount.constructFromObject(data['debitAcount']);
            }
            if (data.hasOwnProperty('creditAccountType')) {
                obj['creditAccountType'] = ApiClient.convertToType(data['creditAccountType'], 'Number');
            }
            if (data.hasOwnProperty('creditAcount')) {
                obj['creditAcount'] = GLAccount.constructFromObject(data['creditAcount']);
            }
            if (data.hasOwnProperty('taxComponentHistories')) {
                obj['taxComponentHistories'] = ApiClient.convertToType(data['taxComponentHistories'], [TaxComponentHistory]);
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
TaxComponent.prototype['id'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
TaxComponent.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
TaxComponent.prototype['createdDate'] = undefined;

/**
 * @member {module:model/AppUser} lastModifiedBy
 */
TaxComponent.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
TaxComponent.prototype['lastModifiedDate'] = undefined;

/**
 * @member {Number} percentage
 */
TaxComponent.prototype['percentage'] = undefined;

/**
 * @member {Number} debitAccountType
 */
TaxComponent.prototype['debitAccountType'] = undefined;

/**
 * @member {module:model/GLAccount} debitAcount
 */
TaxComponent.prototype['debitAcount'] = undefined;

/**
 * @member {Number} creditAccountType
 */
TaxComponent.prototype['creditAccountType'] = undefined;

/**
 * @member {module:model/GLAccount} creditAcount
 */
TaxComponent.prototype['creditAcount'] = undefined;

/**
 * @member {Array.<module:model/TaxComponentHistory>} taxComponentHistories
 */
TaxComponent.prototype['taxComponentHistories'] = undefined;

/**
 * @member {Array.<module:model/TaxGroupMappings>} taxGroupMappings
 */
TaxComponent.prototype['taxGroupMappings'] = undefined;

/**
 * @member {Boolean} new
 */
TaxComponent.prototype['new'] = undefined;






export default TaxComponent;

