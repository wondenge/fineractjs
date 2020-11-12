

import ApiClient from '../ApiClient';
import GetGroupsTemplateColumnHeaderData from './GetGroupsTemplateColumnHeaderData';

/**
 * The GetGroupsTemplateDatatables model module.
 * @module model/GetGroupsTemplateDatatables
 * @version 1.0
 */
class GetGroupsTemplateDatatables {
    /**
     * Constructs a new <code>GetGroupsTemplateDatatables</code>.
     * @alias module:model/GetGroupsTemplateDatatables
     */
    constructor() { 
        
        GetGroupsTemplateDatatables.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateDatatables</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateDatatables} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateDatatables} The populated <code>GetGroupsTemplateDatatables</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateDatatables();

            if (data.hasOwnProperty('applicationTableName')) {
                obj['applicationTableName'] = ApiClient.convertToType(data['applicationTableName'], 'String');
            }
            if (data.hasOwnProperty('registeredTableName')) {
                obj['registeredTableName'] = ApiClient.convertToType(data['registeredTableName'], 'String');
            }
            if (data.hasOwnProperty('columnHeaderData')) {
                obj['columnHeaderData'] = ApiClient.convertToType(data['columnHeaderData'], [GetGroupsTemplateColumnHeaderData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} applicationTableName
 */
GetGroupsTemplateDatatables.prototype['applicationTableName'] = undefined;

/**
 * @member {String} registeredTableName
 */
GetGroupsTemplateDatatables.prototype['registeredTableName'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsTemplateColumnHeaderData>} columnHeaderData
 */
GetGroupsTemplateDatatables.prototype['columnHeaderData'] = undefined;






export default GetGroupsTemplateDatatables;

